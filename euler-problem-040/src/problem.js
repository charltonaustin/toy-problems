/*
An irrational decimal fraction is created by concatenating the positive integers:

0.123456789101112131415161718192021...

It can be seen that the 12th digit of the fractional part is 1.

If d_n represents the nth digit of the fractional part, find the value of the following expression.

d_1 × d_10 × d_100 × d_1000 × d_10000 × d_100000 × d_1000000
*/

var findNthSpot = (number, spot) => {
  return parseInt(number.charAt(spot - 1))
}

var findExpression = (limit) => {
  var irrational = '';
  var limit = Math.pow(10, limit-1)
  for(var i = 1; i <= limit; i++){
    irrational+=i
  }
  var result = 1;
  for(var i = 1; i <= limit; i*=10){
    result*= findNthSpot(irrational, i);
  }
  return result;
}

module.exports = {findExpression};
