const { getClandles } = require("../binance");
const { evaluateCandlePosition } = require("../utils/moving-average-filters");

const router = require("express").Router();
const SMA = require('technicalindicators').SMA;

/**
 * Rota POST para calcular a Média Móvel Simples (SMA).
 * @route POST /api/sma
 * @group SMA - Operações relacionadas à Média Móvel Simples
 * @param {number} period.query.required - Período de cálculo da SMA (50 ou 200 períodos)
 * @param {Array} req.body - Array de objetos representando velas (candles) com valores de fechamento
 * @returns {Array} results - Array contendo os valores da SMA calculada
 */
router.get("/calculate-sma", async (req, res) => {

  let { symbol, period, interval } = req.query;
  // Leitura dos candlesticks
  let candlesticks = await getClandles(symbol, interval, 250);

  // Extrai os valores de fechamento das velas
  let closedCandles = candlesticks.map(c => parseFloat(c.close));

  // Calcula a SMA com base nos valores e no período especificado
  let smaResults = SMA.calculate({ period: period, values: closedCandles });

  // Captura o último candlestick, o mais recente
  let lastCandleClose = closedCandles.slice(-1);

  // Captura o último valor da média móvel
  let lastSma = smaResults.slice(-1);

  console.log('last candle close ', lastCandleClose, 'last sma',  lastSma)

  // Avalia a posição do último candlestick com a última média móvel
  let evaluate = evaluateCandlePosition(lastSma, lastCandleClose);

  // Retorna os resultados da SMA
  res.send(
    {
      type: `sma${period}`,
      period: period,
      // Coloca o símbolo e intervalor dentro do indicador para filtrar no frontend melhor
      symbol: symbol,
      interval: interval,
      values: smaResults,
      candleAboveSma: evaluate.candleAboveSma,
      percentageDifference: evaluate.percentageDifference

    },
  );
});

module.exports = router;
