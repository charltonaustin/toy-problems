var isPallidrome = function(number){
  var stringNumber = number.toString();
  for(var i = 0; i < stringNumber.length / 2; i++){
    var lastIndex = stringNumber.length - 1 - i;
    if(stringNumber[i] !== stringNumber[lastIndex]){
      return false;
    }
  }
  return true;
}

var findPallidromes = function(number){
  var largestPallidrome = -Infinity;
  for(i = number; i > 0; i--){
    for(j = number; j > 0; j--){
      var multiplied = i*j;
      if(isPallidrome(multiplied) && multiplied > largestPallidrome){
        largestPallidrome = multiplied;
      }
    }
  }

  return largestPallidrome;
}
