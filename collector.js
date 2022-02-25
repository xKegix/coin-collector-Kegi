// your code 
// import the coins array

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
    return onlyCoins;
  }

}

// your code
// export the coinCollector function