import CurrencyModel from "../model/currency-model.js";
import fetchAllCurrencies from "../services/fetch-all-currencies.js";
import fetchCandlesticksAndIndicators from "../services/fetch-candlesticks-and-indicators.js";
import CurrencyView from "./currency-view.js";

const IndicatorsTabView = {
  init: async function () {
    this.div = $('#indicators-tab-view'); // Select the element with jQuery

    this.render();

    $(document).ready(function () {
      // Action when a checkbox is checked or unchecked
      $("input[type='checkbox']").on('change', async function () {
        // Check the state of the checkbox
        let isChecked = $(this).prop('checked');

        if (isChecked && $(this).val() === 'sma20') {

          let currencies = await CurrencyModel.getAllCurrencies();

          console.log(currencies.length)

          if (currencies[0]?.indicators === undefined) {
            // Use Promise.all to handle all async operations concurrently
            currencies = await Promise.all(
              currencies.slice(1, 40).map(async (currency) => {
                return await fetchCandlesticksAndIndicators(currency.symbol, '1h');
              })
            );
          }

          const filteredData = currencies.filter(item =>
            item.indicators.some(indicator =>
              indicator.type === "sma20" &&
              indicator.evaluateSma?.candleAboveSma === true
            )
          );

          CurrencyModel.setCandlesticksAndIndicators(filteredData);

          CurrencyView.updateTable(filteredData);

        }
        console.log(`${$(this).val()} is ${isChecked ? 'checked' : 'unchecked'}`);
      });

      // Action when the button is clicked
      $("#btn-sma-20").on('click', function () {
        // Get the checked checkboxes
        let checkedValues = [];
        $("input[type='checkbox']:checked").each(function () {
          checkedValues.push($(this).val());
        });

        if (checkedValues.length > 0) {
          console.log('Checked values: ', checkedValues.join(', '));
        } else {
          console.log('No checkboxes are selected');
        }
      });

      // Event listener for radio button change
      $('.filter-radio').on('change', function () {
        const selectedDirection = $(this).attr('id');
        console.log(selectedDirection.charAt(0).toUpperCase() + selectedDirection.slice(1) + ' filter selected');





      });
      // Se clicar no ícone (up, down), selecinar o radio correspondente
      $('i').on('click', async function () {
        const direction = $(this).hasClass('fa-sort-up') ? 'up' : 'down';
        // Check the corresponding radio button and trigger the change
        $('#' + direction).prop('checked', true).trigger('change');

       

      });


      $(`#btn-search`).on('click', async () => {
        try {
          let currencies = await CurrencyModel.refreshCurrencies();

          // Use Promise.all to handle all async operations concurrently
          currencies = await Promise.all(
            currencies.slice(1, 30).map(async (currency) => {
              return await fetchCandlesticksAndIndicators(currency.symbol, '1h');
            })
          );

          CurrencyModel.setCandlesticksAndIndicators(currencies);

          CurrencyView.updateTable(currencies);

        } catch (error) {
          console.error('Error fetching candlesticks:', error);
        }
      });


    });

  },
  render: async function () {

    let html = `
    <div class="p-4 m-2 border border-gray-300 rounded-lg">
      <div class="mb-4">
        <label for="in-sma-20" class="mr-3">SMA 20</label>
        <input type="checkbox" id="in-sma-20" name="in-sma-20" value="sma20" class="mr-5">
        
        <label for="in-sma-80" class="mr-3">SMA 80</label>
        <input type="checkbox" id="in-sma-80" name="in-sma-80" value="sma80" class="mr-5">
        
        <label for="in-sma-200" class="mr-3">SMA 200</label>
        <input type="checkbox" id="in-sma-200" name="in-sma-200" value="sma200">
      </div>

      <div class="flex items-center">
        <input type="text" placeholder="Search" class="p-2 mr-4 border border-gray-300 rounded-md">
        <button id="btn-search" class="px-4 py-2 mr-2 bg-green-500 text-white rounded-md">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        <button class="px-4 py-2 mr-2 bg-red-500 text-white rounded-md">
          <i class="fa-solid fa-rotate-right"></i>
        </button>
        <div class="flex flex-col">
        <div>
        <input type="radio" id="up" name="filter-radio" class="filter-radio"/>
        <i class="fa-solid fa-sort-up p-2"></i>
        </div>
        <div>
        <input type="radio" id="down" name="filter-radio" class="filter-radio"/>
        <i class="fa-solid fa-sort-down p-2"></i>
        </div>
        </div>
      </div>
    </div>
`;

    // Set the HTML content using jQuery
    this.div.html(html);

  }

}

export default IndicatorsTabView;