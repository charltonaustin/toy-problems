var findLargestMultiple = function(string, length){
  var largestMultiple = 0;
  for(var i = 0; i < string.length-length; i++){
    var currentMultiple = 1;
    for(var j = i; j < i+length; j++){
      console.log(Number(string[j]));
      currentMultiple *= Number(string[j]);
    }
    if(currentMultiple > largestMultiple){
      largestMultiple = currentMultiple;
    }
  }
  return largestMultiple;
}


module.exports = findLargestMultiple;
