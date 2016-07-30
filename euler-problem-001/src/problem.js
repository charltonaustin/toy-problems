var isMultipleOfThree = function(number) {
  return (number % 3) === 0;
}

var isMultipleOfFive = function(number) {
  return (number % 5) === 0;
}

var eulerProblemOne = function(upperBound){
  var sum = 0;

  for(var i = 3; i < upperBound; i+=3){
    if(!isMultipleOfFive(i)){
      sum += i;
    }
  }

  for(var i=5; i < upperBound; i+=5){
    sum +=i;
  }
  return sum;
}

module.exports = {isMultipleOfThree: isMultipleOfThree,
                 isMultipleOfFive: isMultipleOfFive,
                 eulerProblemOne: eulerProblemOne}
