function evaluateCandlePosition(lastMovingAverage, lastCandlestick) {
    let percentageDifference = ((lastCandlestick - lastMovingAverage) / lastMovingAverage) * 100;

    console.log('percentage ', percentageDifference)

    /*
    Último valor da média móvel maior que o último valor do fechamento do candle ou porcentagem do 
    primeiro valor sobre o segundo menor que 0,5%. Assim pega-se também aqueles valores um 
    pouco maiores que o valor do última média móvel.*/
    if (lastMovingAverage > lastCandlestick || percentageDifference <= 0.51) {
        return { candleAboveSma: false, percentageDifference };
    } else if (lastMovingAverage < lastCandlestick || percentageDifference >= -0.51) {
        return { candleAboveSma: true, percentageDifference };
    } else {
        return { aboveMovingAverage: null, percentageDifference };
    }
}

module.exports = { evaluateCandlePosition };