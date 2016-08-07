/*
A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
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

var findPermutation = (array, number) => {
  var permutation = array.slice(0);

  for(var i = 1; i < number; i++){
    permutation = findNextPermutation(permutation);
  }

  return permutation;
}

module.exports = {findNextPermutation,
                  findLargestPosition,
                  findSmallestPositionToRight,
                  swap,
                  reOrderRemaining,
                  findPermutation};
