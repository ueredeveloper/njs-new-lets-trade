import SearchCurrencyView from "../view/search-currency-view.js";

const SearchCurrencyController = {
    init: async function () {
        SearchCurrencyView.init('BTCUSDT', '1h');
    }
};

export default SearchCurrencyController;