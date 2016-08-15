/*
We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.
HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
*/

var findLargestPosition = (array) => {
// Function to find the largest position
// where elements are out of order
  var position = -1;
  for(var i = 0; i < array.length - 1; i++){
    if(array[i] < array[i+1]){
      position = i;
    }
  }
  return position;
}

var findSmallestPositionToRight = (array, position) => {
// Function to find the position of the smallest element larger than
// the element at the position
  var currentElement = array[position];
  var returnPosition = -1;
  var returnElement = Number.POSITIVE_INFINITY;
  for(var i = position+1; i < array.length; i++){
    if(array[i] > currentElement && array[i] < returnElement){
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
  toRight.sort();
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

var findPandigital = (strNum, alreadyFound) => {
  for(var n = 1; n < strNum.length - 1; n++){
    var multiplicand = parseInt(strNum.substring(0,n));
    for(var m = n+1; m < strNum.length; m++){
      var multiplier = parseInt(strNum.substring(n,m));
      var product = parseInt(strNum.substring(m));
      if(multiplicand * multiplier === product && !alreadyFound[product]){
        alreadyFound[product] = true;
      }
    }
  } 
}

var isNotIdentity = (permutation) => {
  for(var i = 0; i < permutation.length; i++){
    if(i+1 !== permutation[i]){
      return true;
    } 
  }
  return false;
}

var findSum = () => {
  var permutation = [1,2,3,4,5,6,7,8,9];
  var alreadyFound = {};
  do{
    findPandigital(permutation.join(""), alreadyFound);
    permutation = findNextPermutation(permutation);
  }while(isNotIdentity(permutation));
  var sum = 0;
  for(var key in alreadyFound){
    sum += parseInt(key);
  }
  return sum;
}

module.exports = {findSum, findPandigital, isNotIdentity};
