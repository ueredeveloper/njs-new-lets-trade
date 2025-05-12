const { getClandles } = require("../binance");
const { evaluateCandlePosition } = require("../utils/moving-average-filters");
const SMA = require('technicalindicators').SMA;

const router = require("express").Router();


// remove cíclical error
router.get("/candlesticks-and-indicators", async (req, res) => {

    let { symbol, interval, limit } = req.query;
    console.log(symbol)

    try {
        let candlesticks = await getClandles(symbol, interval, limit);

        // Extrai os valores de fechamento das velas
        let candlesClose = candlesticks.map(c => parseFloat(c.close));

        // Calcula a SMA com base nos valores e no período especificado
        let sma20Values = SMA.calculate({ period: 20, values: candlesClose });

        // Calcula a SMA com base nos valores e no período especificado
        let sma80Values = SMA.calculate({ period: 80, values: candlesClose });

        // Calcula a SMA com base nos valores e no período especificado
        let sma200Values = SMA.calculate({ period: 200, values: candlesClose });

        let lastCandlestickClose = candlesticks.slice(-1)[0].close;
        let lastSma20 = sma20Values.slice(-1)[0];
        let lastSma80 = sma80Values.slice(-1)[0]
        let lastSma200 = sma200Values.slice(-1)[0]

        let evaluateSma20 = evaluateCandlePosition(lastSma20, lastCandlestickClose);
        let evaluateSma80 = evaluateCandlePosition(lastSma80, lastCandlestickClose);
        let evaluateSma200 = evaluateCandlePosition(lastSma200, lastCandlestickClose);

        res.send(
            JSON.stringify(
                {
                    symbol: symbol,
                    interval: interval,
                    price: lastCandlestickClose,
                    candlesticks: {
                        values: candlesticks
                    },
                    indicators: [
                        {
                            type: 'sma20',
                            period: 20,
                            // Coloca o símbolo e intervalor dentro do indicador para filtrar no frontend melhor
                            symbol: symbol,
                            interval: interval,
                            values: sma20Values,
                            candleAboveSma: evaluateSma20.candleAboveSma,
                            percentageDifference: evaluateSma20.percentageDifference

                        },
                        {
                            type: 'sma80',
                            period: 80,
                            // Coloca o símbolo e intervalor dentro do indicador para filtrar no frontend melhor
                            symbol: symbol,
                            interval: interval,
                            values: sma20Values,
                            candleAboveSma: evaluateSma80.candleAboveSma,
                            percentageDifference: evaluateSma80.percentageDifference

                        },
                        {
                            type: 'sma200',
                            period: 200,
                            // Coloca o símbolo e intervalor dentro do indicador para filtrar no frontend melhor
                            symbol: symbol,
                            interval: interval,
                            values: sma20Values,
                            candleAboveSma: evaluateSma200.candleAboveSma,
                            percentageDifference: evaluateSma200.percentageDifference

                        },
                    ]
                }

            ));
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;

/*
{
    "symbol": "BTCUSDT",
    "interval": "1h",
    "price": "104006.85000000",
    "candlesticks": {
        "values": [
            {
                "openTime": 1746154800000,
                "open": "96952.59000000",
                "high": "97233.10000000",
                "low": "96952.58000000",
                "close": "97102.32000000",
                "volume": "434.57258000",
                "closeTime": 1746158399999,
                "quoteVolume": "42204257.76606470",
                "trades": 85999,
                "baseAssetVolume": "215.02117000",
                "quoteAssetVolume": "20881016.69513660"
            },
            ...
            
            {
                "openTime": 1747051200000,
                "open": "103762.89000000",
                "high": "104098.94000000",
                "low": "103729.04000000",
                "close": "104006.85000000",
                "volume": "1026.14629000",
                "closeTime": 1747054799999,
                "quoteVolume": "106642512.54434330",
                "trades": 136062,
                "baseAssetVolume": "640.50878000",
                "quoteAssetVolume": "66561247.80617060"
            }
        ]
    },
    "indicators": [
        {
            "type": "sma20",
            "period": 20,
            "symbol": "BTCUSDT",
            "interval": "1h",
            "values": [
                96957.082,
                96946.32299999999,
                96934.35249999998,
               
            ],
            ...

*/
