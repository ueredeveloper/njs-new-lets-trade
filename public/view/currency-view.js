const CurrencyView = {
    init: async function () {
        this.div = $('#root'); // Select the element with jQuery
        console.log(this.div); // Verify the selection in the console
        this.render();
    },
    render: function () {
        let innerHTML = `
            <div> Hello Node Mon dev</div>
        `;

        // Use jQuery's .html() method to set the HTML content
        this.div.html(innerHTML);
    }
};

export default CurrencyView;
