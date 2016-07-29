/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/

var times = (number, digit) =>{
  var digitNum = parseInt(digit);
  var carry = 0;
  var total = [];
  for(var i = number.length -1; i >= 0; i--){
    var currentDigit = parseInt(number[i]);
    var currentMult = currentDigit * digitNum;
    var totalDigit = currentMult % 10 ;
    totalDigit += carry;
    total.push(totalDigit);
    carry = Math.floor(currentMult / 10);
  }
  if(carry > 0){
    total.push(""+carry);
  }
  return total.reverse().join("");
}

var findPowerOfTwo = (number) =>{
  var two = "2";
  var total = "2";
  for(var i = 1; i < number; i++){
    total = times(total, two);
  }

  return total;
}

var add = (number1, number2) => {
  debugger;
  var length = Math.max(number1.length, number2.length);
  var total = [];
  var carry = 0;
  var number1Pad = "";
  for(var i = 0; i < length - number1.length; i++){
    number1Pad+=0
  }
  number1 = number1Pad + number1;
  var number2Pad = "";
  for(var i = 0; i < length - number2.length; i++){
    number2Pad+=0
  }
  number2 = number2Pad + number2;


  for(var i = length -1; i >= 0; i--){
    var currNum1 = parseInt(number1[i]);
    var currNum2 = parseInt(number2[i]);
    currentDigit = (currNum2 + currNum1 + carry)% 10;
    total.push(currentDigit);
    carry = Math.floor((currNum1 + currNum2 + carry) / 10);
  }
  if(carry > 0){
    total.push(""+carry);
  }
  return total.reverse().join("");
}

var sumOfPowerOfTwo = (number) => {
  if(number < 0){
    return "please use a positive number";
  }
  
  var power = findPowerOfTwo(number);
  var total = "0";
  debugger
  for(var i = 0; i < power.length; i++){
    var currentDigit = power[i];
    total = add(total, currentDigit);
  }
  return total;
}


module.exports = {sumOfPowerOfTwo, findPowerOfTwo};
