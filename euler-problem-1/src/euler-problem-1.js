var isMultipleOfThree = function(number) {
  return (number % 3) === 0;
}

var isMultipleOfFive = function(number) {
  return (number % 5) === 0;
}

var eulerProblemOne = function(upperBound){
  var sum = 0;
  for(var i = 0; i < upperBound; i++){
    if(isMultipleOfThree(i) || isMultipleOfFive(i)){
      sum += i;
    }
  }
  return sum;
}

