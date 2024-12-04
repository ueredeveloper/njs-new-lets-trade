import { IncrementalDisplayable } from "echarts/types/src/util/graphic.js";

class Indicator {
    constructor(type, values, period = 20) {
        this.type = type.toLowerCase(); // e.g., 'sma20', 'sma80', 'ichimoku'
        this.period = period; // Period for the indicator (default is 20 for SMA)
        this.values = values; // Array of input values (e.g., closing prices)

    }
}


export default IndicatorModel;
