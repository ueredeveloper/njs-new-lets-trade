const { getClandles } = require("../binance");
const { evaluateCandlePosition } = require("../utils/moving-average-filters");
const SMA = require('technicalindicators').SMA;

const router = require("express").Router();


// remove cíclical error
router.get("/candlesticks-and-indicators", async (req, res) => {

    let { symbol, interval, limit } = req.query;

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
                            values: sma20Values,
                            evaluateSma: evaluateSma20
                        },
                        {
                            type: 'sma80',
                            period: 80,
                            values: sma80Values,
                            evaluateSma: evaluateSma80
                        },
                        {
                            type: 'sma200',
                            period: 200,
                            values: sma200Values,
                            evaluateSma: evaluateSma200
                        }
                    ]
                }

            ));
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;
