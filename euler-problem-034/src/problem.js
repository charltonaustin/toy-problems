var factorials = {0: 1, 1: 1, 2: 2, 3: 6, 4: 24, 5: 120, 6: 720, 7: 5040, 8: 40320, 9: 362880}

var sumOfFactorialOfDigits = (number) => {
  var total = 0;
  while(number > 0){
    var digit = number % 10;
    number = Math.floor(number / 10);
    total += factorials[digit];
  }
  return total;
}

var digitFactorials = (limit) => {
  var total = 0;
  for(var n = 10; n < limit; n++){
    var sum = sumOfFactorialOfDigits(n);
    if(sum === n){
      total+= n;
    }
  }
  return total;
}

module.exports = {sumOfFactorialOfDigits, digitFactorials};
