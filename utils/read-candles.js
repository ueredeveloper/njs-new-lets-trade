const fs = require('node:fs/promises');
const path = require('path');

/**
 * Reads candlestick data from a JSON file.
 * @param {string} symbol - The symbol of the financial asset to read candlestick data for.
 * @param {string} interval - The time interval of the candlesticks (e.g., '1m' for 1 minute, '1h' for 1 hour, etc.).
 * @returns {Array} An array containing the candlestick data read from the JSON file, or an empty array if the file is empty or invalid.
 */
async function readCandles(symbol, interval) {
    const filePath = path.join(__dirname, '..', 'data', `${symbol}-${interval}.json`);

    try {
        const data = await fs.readFile(filePath, 'utf8');
        if (!data.trim()) {
            // File is empty
            return [];
        }
        const dataArray = JSON.parse(data); // Parse the JSON string into an array
        console.log(dataArray.length);
        return dataArray;
    } catch (err) {
        if (err.code === 'ENOENT') {
            // File not found
            console.error(`File not found: ${filePath}`);
        } else if (err instanceof SyntaxError) {
            // JSON parsing error
            console.error(`Invalid JSON in file: ${filePath}`);
        } else {
            console.error('Error reading file:', err);
        }
        return [];
    }
}

module.exports = readCandles;
