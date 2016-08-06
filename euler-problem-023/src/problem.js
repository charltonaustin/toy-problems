/*
Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/

var isAbundantNumber = (number) => {
  if(number === 1){
    return false;
  }
  var total = 1;
  for(var i = 2; i <= Math.sqrt(number); i++){
    if(number % i === 0){
      var otherDivisor = number / i
      if(i === otherDivisor){
        total+= otherDivisor;
      }else{
        total+= i + otherDivisor;
      }
      if(total > number){
        return true;
      }
    }
  }
  return false;
}

var findAbundantNumbersLessThan = (limit) => {
  var abundantNumbers = [12];
  for(var i = 13; i < limit; i++){
    if(isAbundantNumber(i)){
      abundantNumbers.push(i);
    }
  }
  return abundantNumbers;
}

var allPossibleNumbers = (limit) => {
  var numbers = [];
  for(var i = 1; i < limit; i++){
    numbers.push(i);
  }
  return numbers;
}

var filterOutMultiplesOfAbundantNumbers = (abundantNumbers, possibleNumbers) => {
  for(var i = 0; i < abundantNumbers.length; i++){
    var abundantNumber = abundantNumbers[i];
    for(var j = 1; j * abundantNumber <= possibleNumbers[possibleNumbers.length - 1]; j++){
      for(var k = 0; k < possibleNumbers.length; k++){
        if(j * abundantNumber === possibleNumbers[k]){
          possibleNumbers.splice(k,1);
        }
      }
    }
  }
  return possibleNumbers;
}

var filterOutSumsOfAbundantNumbers = (abundantNumbers, possibleNumbers)=>{
  for(var i = 0; i < abundantNumbers.length; i++){
    for(var j = i; j < abundantNumbers.length; j++){
      var sum = abundantNumbers[i]+abundantNumbers[j];
      for(var k = 0; k < possibleNumbers.length; k++){
        if(sum === possibleNumbers[k]){
          possibleNumbers.splice(k,1);
        }
      }
    }
  }
  return possibleNumbers
}

var generateAllPossibleSums = (abundantNumbers)=>{
  var sums = {};
  for(var i = 0; i < abundantNumbers.length; i++){
    for(var j = i; j < abundantNumbers.length; j++){
      var sum = abundantNumbers[i]+abundantNumbers[j];
      if(sum > 28123){
        break;
      }
      sums[sum] = true;
    }
  }
  return sums;
}

var sumNumbers = (numbers) => {
  var total = 0;
  for(var i = 0; i < numbers.length; i++){
    total+=numbers[i];
  }
  return total;
}

var sumNumbersExcept = (exceptions, limit) => {
  var total = 0;
  for(var i = 0; i < limit; i++){
    if(!exceptions[i]){
      total+=i;      
    }
  }
  return total;
}

var removeMultiplesOfAbundant = (abundantNumbers)=>{
  for(var i = 0; i < abundantNumbers.length; i++){
    for(var j = i + 1; j < abundantNumbers.length; j++){
      if(abundantNumbers[j] % abundantNumbers[i] === 0){
        abundantNumbers.splice(j,1);
      }
    }
  }
  return abundantNumbers;
}

var findSum = ()=>{
  var abundantNumbers = findAbundantNumbersLessThan(28123);
  var allPossibleSums = generateAllPossibleSums(abundantNumbers);
  return sumNumbersExcept(allPossibleSums, 28123);
}

module.exports = {findSum,
                  sumNumbers,
                  filterOutSumsOfAbundantNumbers,
                  filterOutMultiplesOfAbundantNumbers,
                  allPossibleNumbers,
                  findAbundantNumbersLessThan,
                  isAbundantNumber
                  };
