import searchCandlesticks from "../services/search-candlesticks.js";

const SearchCurrencyView = {
    init: async function (btnId, symbol, interval) {
        this.div = $(`#${btnId}`);
        this.btnSearchId = `btn-search-${btnId}`;
        this.symbol = symbol;
        this.interval = interval;
        this.render();
        this.actions();
    },
    render: function () {
        let innerHTML = `
            <button id=${this.btnSearchId}>search</button>
        `;

        // Set the HTML content using jQuery
        this.div.html(innerHTML);
    },
    actions: function () {

        // Using an arrow function ensures that `this` refers to the SearchCurrencyView object
        $(`#${this.btnSearchId}`).on('click', async () => {
            try {
                // Ensure you are calling the searchCandlesticks method with the correct parameters
                const candles = await searchCandlesticks(this.symbol, this.interval);
                console.log(candles); // Log the response from the API or function
            } catch (error) {
                console.error('Error fetching candlesticks:', error);
            }
        });
    }
};

export default SearchCurrencyView;
