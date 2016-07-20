var findDifferenceOfSquares = function(number){
  var differences = [];
  var sum = 0;
  var sumOfSquares = 0;
  for(var i = 1; i < number + 1; i++) {
    sum += i;
    sumOfSquares += i * i;
    differences.push(sum*sum - sumOfSquares);
  }
  return differences;
}
