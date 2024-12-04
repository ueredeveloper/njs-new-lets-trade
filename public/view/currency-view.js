import SearchCurrencyController from "../controller/search-currency-controller.js";
import CurrencyModel from "../model/currency-model.js";
import SearchCurrencyView from "./search-currency-view.js";

const CurrencyView = {
  init: async function () {
    this.div = $('#currencies-view'); // Select the element with jQuery
    this.currencies = await CurrencyModel.getAllCurrencies();
    this.render();
  },
  render: async function () {

    this.div.append(`
            <table class="h-96">
              <!-- congela a tag thead -->
              <thead class="sticky top-0 z-10" >
                <tr class="bg-zinc-100">
                  <th class="w-4">Símbolo</th>
                  <th class="text-center px-4 py-2 w-full">Preço</th>
                  <th class="w-4">Ação</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          `);

    this.updateTable(this.currencies);

  },
  updateTable(currencies) {

    let tbody = this.div.find('tbody');
    //tbody.empty();


    currencies.forEach((currency, index) => {
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
            <td class="text-center px-4 py-2">${currency.symbol}</td>
            <td class="text-center px-4 py-2">${currency.price}</td>
            <td class="text-center px-4 py-2" id=${btnId}></td>
            </tr>
            `);


      SearchCurrencyController.init(btnId, currency.symbol, '1h');



    });
  }
};

export default CurrencyView;
