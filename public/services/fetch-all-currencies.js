const fetchAllCurrencies = async (symbol, interval) => {

    // Fetch candlesticks
    let candlesticks = await fetch(`http://localhost:3000/services/currencies`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });

    return candlesticks;
}

export default fetchAllCurrencies;