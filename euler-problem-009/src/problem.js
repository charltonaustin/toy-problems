var findPythagoreanTriplet = function(){
  for(var a = 1; a < 1000; a++){
    for(var b = a+1; b < 1000; b++){
      for(var c = b+1; c < 1000; c++){
        if(a + b + c === 1000 && a * a + b * b === c * c){
          return a*b*c;
        }
      }
    }
  }
  return 0;
}


module.exports = findPythagoreanTriplet;
