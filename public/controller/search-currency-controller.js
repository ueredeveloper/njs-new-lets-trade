import SearchCurrencyView from "../view/search-currency-view.js";

const SearchCurrencyController = {
    init: async function (btnId, symbol, interval) {
        SearchCurrencyView.init(btnId, symbol, interval);
    }
};

export default SearchCurrencyController;