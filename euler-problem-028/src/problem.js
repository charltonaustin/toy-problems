/*
Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
*/

var sumDiagonals = (matrix) => {
  var sum = 0;
  for(var i = 0; i < matrix[0].length; i++){
    sum +=matrix[i][i]
    if(i !== matrix[0].length - 1 - i){
      sum += matrix[matrix[0].length - 1 - i][i]
    }
  }
  return sum;
}

var createMatrix = (numberOfEdges, startingPosition, size) => {
  var matrix = [];
  for(var i = 0; i <= numberOfEdges; i++){
    var currentRow = [];
    for(var j = 0; j <= numberOfEdges; j++){
      currentRow.push(0);
    }
    matrix.push(currentRow);
  }
  var i = startingPosition;
  var j = startingPosition;
  var numberOfElements = 1;
  matrix[i][j] = numberOfElements;
  var addI = 1;
  var addJ = 1;
  while(numberOfElements < size){
    for(var k = 1; k <= addI; k++){
      if(numberOfElements < size){
        i += 1
        numberOfElements++;
        matrix[j][i] = numberOfElements;
      }
    }
    for(var k = 1; k<= addJ; k++){
      if(numberOfElements < size){
        j += 1;
        numberOfElements++;
        matrix[j][i] = numberOfElements;
      }
    }
    addI++
    addJ++
    for(var k = 1; k <= addI; k++){
      if(numberOfElements < size){
        i -= 1
        numberOfElements++;
        matrix[j][i] = numberOfElements;
      }
    }
    for(var k = 1; k<= addJ; k++){
      if(numberOfElements < size){
        j -= 1;
        numberOfElements++;
        matrix[j][i] = numberOfElements;
      }
    }
    addI++
    addJ++
  }
  return matrix;
}

var countElements = (numberOfEdges) => {
  var currentNumberOfEdges = 0;
  var currentSize = 1;
  var nextOdd = 3;
  while(currentNumberOfEdges < numberOfEdges){
    currentNumberOfEdges++
    currentSize += nextOdd
    nextOdd+=2;
  }
  return currentSize;
}

var findStartingPosition = (numberOfEdges) => {
  return Math.floor(numberOfEdges/2);
}

var findSum = (sprialSize) => {
  var numberOfEdges =  sprialSize - 1;
  var numberOfElements = countElements(numberOfEdges);
  var startingPosition = findStartingPosition(numberOfEdges);
  var matrix = createMatrix(numberOfEdges, startingPosition, numberOfElements)
  return sumDiagonals(matrix);
}
module.exports = {countElements, createMatrix, sumDiagonals, findSum};
