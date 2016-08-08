/*
The Fibonacci sequence is defined by the recurrence relation:

    F_n = F_n−1 + F_n−2, where F_1 = 1 and F_2 = 1.

Hence the first 12 terms will be:

    F_1 = 1
    F_2 = 1
    F_3 = 2
    F_4 = 3
    F_5 = 5
    F_6 = 8
    F_7 = 13
    F_8 = 21
    F_9 = 34
    F_10 = 55
    F_11 = 89
    F_12 = 144

The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
*/


var returnStringTotal = (carry, total) => {
  if(carry > 0){
    total.push(carry);
  }
  return total.reverse().join("");
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

var findFibSeq = (termSize) => {
  var num1 = "1";
  var num2 = "1";
  var index = 2;
  while(num2.toString().length<termSize){
    var temp = add(num1, num2);
    num1 = num2
    num2 = temp;
    index++
  }
  return index;
}

module.exports = {findFibSeq};
