import fetchAllCurrencies from "../services/fetch-all-currencies.js"

const CurrencyModel = {
    currencies:[],
    getAllCurrencies: async function (){
        return this.currencies = fetchAllCurrencies();
    }
}

export default CurrencyModel;