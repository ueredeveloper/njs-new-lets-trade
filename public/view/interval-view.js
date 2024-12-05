const IntervalView = {
    filteredCurrencies: [],
    init: async function () {
        this.div = $('#interval-view');
        this.render();
        this.addListeners();
        this.interval = '1h';

    },
    render: function () {
        let html = `
        <div>
            <input type="radio" id="1m" name="filter-radio" class="filter-radio mx-2" />
            <label for="1m">1m</label>

            <input type="radio" id="5m" name="filter-radio" class="filter-radio mx-2" />
            <label for="5m">5m</label>

            <input type="radio" id="15m" name="filter-radio" class="filter-radio mx-2" />
            <label for="15m">15m</label>

            <input type="radio" id="1h" name="filter-radio" class="filter-radio mx-2" checked/>
            <label for="1h">1h</label>

            <input type="radio" id="4h" name="filter-radio" class="filter-radio mx-2" />
            <label for="4h">4h</label>

            <input type="radio" id="8h" name="filter-radio" class="filter-radio mx-2" />
            <label for="8h">8h</label>

            <input type="radio" id="1d" name="filter-radio" class="filter-radio mx-2" />
            <label for="1d">1d</label>

            <input type="radio" id="2d" name="filter-radio" class="filter-radio mx-2" />
            <label for="2d">2d</label>       
        </div>

          `

        this.div.html(html);
    }
    ,
    addListeners: function () {
        // Listen for change on any radio button with name="filter-radio"
        this.div.on('change', 'input[name="filter-radio"]', function () {
            const selectedInterval = $('input[name="filter-radio"]:checked').attr('id');
            console.log('Selected Interval:', selectedInterval);
            IntervalView.interval = selectedInterval;

            // Add any additional handling for the selected interval here
        });
    },
    getSelectedInterval: function () {
        return IntervalView.interval;
    }



}

export default IntervalView;