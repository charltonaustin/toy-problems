/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

var properDivisors = (number) => {
  if(number === 1){
    return [];
  }
  var divisors = [1];
  for(var i = 2; i <= Math.sqrt(number); i++){
    if(number % i === 0){
      var otherDivisor = number / i
      if(i === otherDivisor){
        divisors.push(i);
      }else{
        divisors.push(i, otherDivisor);
      }
    }
  }
  return divisors;
}

var findSumOfNumbers = (numbers) => {
  var total = 0;
  for(var i = 0; i < numbers.length; i++){
    total+=numbers[i];
  }
  return total;
}

var hasAmicableNumberLessThan = (limit, number) => {
  debugger;
  var divisors = properDivisors(number);
  var sum = findSumOfNumbers(divisors);
  if(sum < limit && sum != number){
    var sumDivisors = properDivisors(sum);
    var sumDivisorsSum = findSumOfNumbers(sumDivisors);
    if(sumDivisorsSum === number){
      return sum;
    }
  }
  return false;
}

var findSumOfAmicableNumbers = (limit) => {
  var total = 0;
  var amicableNumbers = {};
  for(var i = 1; i < limit+1; i++){
    var maybeAmicable = hasAmicableNumberLessThan(limit, i);
    if(maybeAmicable && !amicableNumbers[maybeAmicable]){
      amicableNumbers[maybeAmicable] = true;
      amicableNumbers[i] = true;
      total += maybeAmicable + i;
    }
  }
  return total;
}

module.exports = {properDivisors, findSumOfAmicableNumbers, hasAmicableNumberLessThan};
