/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

var returnStringTotal = (carry, total) => {
  if(carry > 0){
    total.push(carry);
  }
  return total.reverse().join("");
}

var timesSingleDigit = (number, digit) => {
  var carry = 0;
  var total = [];
  for(var i = number.length -1; i >= 0; i--){
    var currentMult = parseInt(number[i]) * parseInt(digit) + carry;
    total.push(currentMult % 10);
    carry = Math.floor(currentMult / 10);
  }
  return returnStringTotal(carry, total);
}

var padNumber = (number, length) => {
  var numberPad = "";
  for(var i = 0; i < length - number.length; i++){
    numberPad+=0
  }
  return numberPad + number
}

var add = (number1, number2) => {
  var length = Math.max(number1.length, number2.length);
  var total = [];
  var carry = 0;
  number1 = padNumber(number1, length);
  number2 = padNumber(number2, length);
  for(var i = length -1; i >= 0; i--){
    var currentTotal = parseInt(number1[i]) + parseInt(number2[i]) + carry;
    total.push(currentTotal % 10);
    carry = Math.floor(currentTotal / 10);
  }
  return returnStringTotal(carry, total);
}

var times = (number1, number2) =>{
  var numbersToSum = [];
  var zerosToAdd = "";
  for(var i = number2.length-1; i >= 0; i--){
    var currentNum = timesSingleDigit(number1, number2[i]);
    currentNum + zerosToAdd;
    numbersToSum.push(currentNum + zerosToAdd);
    zerosToAdd+="0";
  }
  var total = "0";
  for(var i = 0; i < numbersToSum.length; i++){
    total = add(total, numbersToSum[i]);
  }
  return total;
}

var factorial = (number) => {
  var total="1";
  while(number > 0){
    total = times(total, number.toString());
    number--
  }
  return total;
}

var sumOfFactorial = (number)=>{
  var fact = factorial(number);
  var total = 0;
  for(var i = 0; i < fact.length; i++){
    total+=parseInt(fact[i]);
   }
  return total;
}

module.exports = {factorial, sumOfFactorial, times};
