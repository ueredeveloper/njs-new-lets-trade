import SearchCurrencyController from "../controller/search-currency-controller.js";
import CurrencyModel from "../model/currency-model.js";
import SearchCurrencyView from "./search-currency-view.js";

const CurrencyView = {
  init: async function () {
    this.div = $('#currencies-table'); // Select the element with jQuery
    this.currencies = await CurrencyModel.getAllCurrencies();
    this.render();
  },
  render: async function () {

    this.div.append(`
            <table class="">
              <!-- congela a tag thead -->
              <thead class="sticky top-0 z-10" >
                <tr class="bg-zinc-100">
                  <th>Símbolo</th>
                  <th>Preço</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          `);

    let tbody = this.div.find('tbody');

    this.currencies.forEach((currency, index) => {
      /* Exemplo de objeto
      [
        {
            "id": null,
            "symbol": "BTCUSDT",
            "price": "91826.58000000",
         },
         */

      let btnId = 'btn-search-candlesticks-' + index;

      tbody.append(`
          <tr>
            <td>${currency.symbol}</td>
            <td>${currency.price}</td>
            <td id=${btnId}></td>
            </tr>
            `)


      SearchCurrencyController.init(btnId, currency.symbol, '1h');



    });
  }
};

export default CurrencyView;
