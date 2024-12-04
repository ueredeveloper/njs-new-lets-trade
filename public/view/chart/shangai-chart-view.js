import fetchCandlesticksAndIndicators from "../../services/fetch-candlesticks-and-indicators.js";

const ShangaiChartView = {
    init: async function () {
        this.dom = document.getElementById('shangai-chart-view');
        this.shangaiIndex2 = echarts.init(this.dom);

        /* {
             "symbol": "DATAUSDT",
             "interval": "1m",
             "candlesticks": {
                 "values": [
                     {
                         "openTime": 1733255040000,
                         "open": "0.05483000",
                         "high": "0.05490000",
                         "low": "0.05483000",
                         "close": "0.05489000",
                         "volume": "4075.20000000",
                         "closeTime": 1733255099999,
                         "quoteVolume": "223.65575500",
                         "trades": 19,
                         "baseAssetVolume": "2079.80000000",
                         "quoteAssetVolume": "114.12824900"
                     },
                     ...
                 ]
             },
             "indicators": [
                 {
                     "type": "sma20",
                     "period": 20,
                     "values": [
                         0.054965,
                         0.0549785,
                         ...
                     ]
                 }
             ]
         }*/

        this.currency = await fetchCandlesticksAndIndicators('BTCUSDT', '1h');

        this.limit = 100; // Example data limit

        this.render();
    },

    render: function () {
        this.option = {
            title: {
                text: `${this.currency.symbol} - ${this.currency.interval}`,
                left: 0,
            },
            legend: {
                data: ['Candles', 'MA200', 'CL', 'BL', 'spanA', 'spanB'],
                inactiveColor: '#777',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                },
            },
            xAxis: {
                type: 'category',
                data: this.currency.candlesticks.values.map(item => new Date(item.openTime).toLocaleString()),
            },
            yAxis: {
                scale: true,
            },
            series: [
                {
                    name: 'Candles',
                    type: 'candlestick',
                    data: this.currency.candlesticks.values.map(item => [item.open, item.close, item.low, item.high]),
                },
                {
                    name: 'MA20',
                    type: 'line',
                    data: this.currency.indicators[0].values,
                    smooth: true,
                    lineStyle: { color: 'orange', width: 2 },
                },
            ],
        };

        this.shangaiIndex2.setOption(this.option);
    },
};

export default ShangaiChartView;
