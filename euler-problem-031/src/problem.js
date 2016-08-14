/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can £2 be made using any number of coins?
*/

var alreadyCalculated = {};
var count = (denominations, index, amount) => {
  if(amount === 0){
    return 1;
  }
  if(amount < 0){
    return 0;
  }
  if(index <= 0 && amount > 0){
    return 0;
  }
  return count(denominations, index - 1, amount) + count(denominations, index, amount-denominations[index-1]);
} 

var differentWays = (amount) => {
  var denominations = [1, 2, 5, 10, 20, 50, 100, 200];
  return count(denominations, denominations.length, amount);
}

module.exports = {differentWays};
