const fetchCandlesticksAndIndicators = async (symbol, interval) => {

    // Fetch candlesticks
    let objects = await fetch(`http://localhost:3000/services/candlesticks-and-indicators/?symbol=${symbol}&limit=266&interval=${interval}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });

    return objects;
}

export default fetchCandlesticksAndIndicators;