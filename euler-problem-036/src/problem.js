/*
The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)
*/
var isPallidrome = function(stringNumber){
  for(var i = 0; i < stringNumber.length / 2; i++){
    var lastIndex = stringNumber.length - 1 - i;
    if(stringNumber[i] !== stringNumber[lastIndex]){
      return false;
    }
  }
  return true;
}

var sumOfPalindromicTwoBases = (limit) => {
  var sum = 0;
  for(var i = 1; i < limit; i+=2){
    if(isPallidrome(i.toString()) && isPallidrome(i.toString(2))){
      sum+=i;
    }
  }
  return sum;
}

module.exports = {sumOfPalindromicTwoBases};
