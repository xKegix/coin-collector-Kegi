// your code 
// require the coins array
const coins = require('./coins');

function coinCollector(coins) {
  const onlyCoins = [];

  const desired = [
    'quarter',
    'dime',
    'nickel',
    'penny'
  ];

  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    if (desired.includes(coin)) {
      onlyCoins.push(coins[i]);
    }
  }
  return onlyCoins;
}

coinCollector(coins);

// your code
// export the coinCollector function
module.exports = coinCollector;