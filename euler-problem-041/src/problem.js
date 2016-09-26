/*
We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once.
For example, 2143 is a 4-digit pandigital and is also prime.
What is the largest n-digit pandigital prime that exists?
*/

var findLargestPosition = (array) => {
  var position = -1;
  for(var i = 0; i < array.length - 1; i++){
    if(array[i] > array[i+1]){
      position = i;
    }
  }
  return position;
}

var findSmallestPositionToRight = (array, position) => {
  var currentElement = array[position];
  var returnPosition = -1;
  var returnElement = Number.NEGATIVE_INFINITY;
  for(var i = position+1; i < array.length; i++){
    if(array[i] < currentElement && array[i] > returnElement){
      returnElement = array[i];
      returnPosition = i;
    }
  }
  return returnPosition;
}

var swap = (firstPosition, secondPosition, array) => {
  var temp = array[firstPosition];
  array[firstPosition] = array[secondPosition];
  array[secondPosition] = temp;
  return array;
}

var reOrderRemaining = (array, position) => {
// A function to reorder all elements
// to the right of the position
  var toRight = array.slice(position+1);
  toRight.sort().reverse();
  var reOrderedArray = [];
  for(var i = 0; i < array.length; i++){
    if(i <= position){
      reOrderedArray.push(array[i]);
    }else{
      reOrderedArray.push(toRight[i-position-1]);
    }
  }
  return reOrderedArray;
}

var findNextPermutation = (array) => {
  var largestPosition = findLargestPosition(array);
  var smallestPositionRight = findSmallestPositionToRight(array, largestPosition);
  array = swap(largestPosition, smallestPositionRight, array);
  array = reOrderRemaining(array, largestPosition);
  return array;
}

var isPrime = (number) => {
  for(var i = 2; i < Math.sqrt(number); i++){
    if(number % i === 0){
      return false;
    }
  }
  return true;
}

var findLargestPandigitalNumber = () => {
  var number = [];
  for(var i = 9; i > 0; i--){
    number.push(i);
  }
  while(number.length > 0){
    var possiblePrime = findIfPrimeExcistsForPandigital(number);
    if(possiblePrime != "Could not find prime pandigital number"){
      return possiblePrime;
    }
    number.reverse().pop();
    number.reverse();

  }
  return "Could not find prime pandigital number";
}

var findIfPrimeExcistsForPandigital = (number) => {
  var starting = number.slice(0);
  var using = number.slice(0);
  do{
    if(isPrime(parseInt(using.join("")))){
      return parseInt(using.join(""))
    }
    using = findNextPermutation(using);
  }while(using.join("") != starting.join(""))
  return "Could not find prime pandigital number";
}

module.exports = {findLargestPandigitalNumber};
