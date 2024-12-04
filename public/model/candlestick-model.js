class CandlestickModel {
    constructor(symbol, interval, values) {
        this.symbol = symbol; // e.g., 'sma20', 'sma80', 'ichimoku'
        this.interval = interval; // Period for the indicator (default is 20 for SMA)
        this.values = values; // Array of input values (e.g., closing prices)

    }
}

export default CandlestickModel;
