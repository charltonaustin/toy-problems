/*
Take the number 192 and multiply it by each of
1, 2, and 3:

192 × 1 = 192
192 × 2 = 384
192 × 3 = 576
By concatenating each product we get the 1 to 9
pandigital, 192384576. We will call 192384576
the concatenated product of 192 and (1,2,3)

The same can be achieved by starting with 9 and
multiplying by 1, 2, 3, 4, and 5, giving the
pandigital, 918273645, which is the concatenated
product of 9 and (1,2,3,4,5).

What is the largest 1 to 9 pandigital 9-digit
number that can be formed as the concatenated
product of an integer with (1,2, ... , n)
where n > 1?
*/


var findLargestPosition = (array) => {
// Function to find the largest position
// where elements are out of order
  var position = -1;
  for(var i = 0; i < array.length - 1; i++){
    if(array[i] > array[i+1]){
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
  toRight.reverse();
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

var someFunction = () => {
  var permutation = [9,8,7,6,5,4,3,2,1];
  return 0;
}

module.exports = {findNextPermutation};
