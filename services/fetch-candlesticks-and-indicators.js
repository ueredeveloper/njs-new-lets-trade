const { getClandles } = require("../binance");
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

        res.send(
            JSON.stringify(
                {
                    symbol: symbol,
                    interval: interval,
                    candlesticks: {
                        values: candlesticks
                    },
                    indicators: [
                        {
                            type: 'sma20',
                            period: 20,
                            values: sma20Values
                        },
                        {
                            type: 'sma80',
                            period: 80,
                            values: sma80Values
                        },
                        {
                            type: 'sma200',
                            period: 200,
                            values: sma200Values
                        }
                    ]
                }

            ));
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;
