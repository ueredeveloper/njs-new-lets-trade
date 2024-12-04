const fs = require('node:fs/promises');

/**

Escreve os dados das velas em um arquivo JSON.
@param {string} symbol - O símbolo do ativo financeiro para o qual deseja-se escrever os dados das velas.
@param {string} interval - O intervalo de tempo das velas (por exemplo, '1m' para 1 minuto, '1h' para 1 hora, etc.).
@param {Array} candles - Um array contendo os dados das velas a serem escritos no arquivo JSON.
*/

async function writeCandles(symbol, interval, candles) {
  // Só escreve se houver candlesticks para escrever.
  if (candles.length>0) {
    fs.writeFile(`./data/${symbol}-${interval}.json`, JSON.stringify(candles), (err) => {
      if (err) throw err;
    })
  }
  
}
module.exports = writeCandles;
