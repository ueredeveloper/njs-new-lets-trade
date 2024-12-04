const IndicatorsTabView = {
  init: async function () {
    this.div = $('#indicators-tab-view'); // Select the element with jQuery

    this.render();
  },
  render: async function () {

    let html = `
    <div>
      <button id="bnt-sma-20">sma 20</button>
      <button>sma 80</button>
      <button>sma 200</button>
    </div>
`;

    // Set the HTML content using jQuery
    this.div.html(html);

    // Using an arrow function ensures that `this` refers to the SearchCurrencyView object
    $(`#bnt-sma-20`).on('click', async () => {
      try {
          
      } catch (error) {
          console.error('Error fetching candlesticks:', error);
      }
  });


  }

}

export default IndicatorsTabView;