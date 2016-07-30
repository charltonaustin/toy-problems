
var largestProductOfFour = function(matrix) {
  var largestMultiple = 0;
  var length = 4;
  for(var i = 0; i < matrix.length; i++){
    for(var j = 0; j < matrix[0].length; j++){

      // forward
      var currentMultiple = 1;
      for(var k = 0; k < length; k++){
        if(j+k < matrix[0].length){
          currentMultiple *= matrix[i][j+k];
        }
      }
      if(currentMultiple > largestMultiple){
        largestMultiple = currentMultiple;
      }

      // downward
      currentMultiple = 1;
      for(var k = 0; k < length; k++){
        if(i+k < matrix.length){
          currentMultiple *= matrix[i+k][j];
        }
      }
      if(currentMultiple > largestMultiple){
        largestMultple = currentMultiple;
      }

      // diagonal-up-back
      currentMultiple = 1;
      for(var k = 0; k < length; k++){
        if(i-k > 0 && j-k > 0){
          currentMultiple *= matrix[i-k][j-k];
        }
      }
      if(currentMultiple > largestMultiple){
        clargestMultple = currentMultiple;
      }

      // diagonal-up-forward
      currentMultiple = 1;
      for(var k = 0; k < length; k++){
        if(i-k > 0 && j+k < matrix[0].length){
          currentMultiple *= matrix[i-k][j+k];
        }
      }
      if(currentMultiple > largestMultiple){
        largestMultple = currentMultiple;
      }
    }
  }
  return largestMultple;
};

module.exports = largestProductOfFour;
