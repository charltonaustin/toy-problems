/*
 A Pythagorean triplet is a set of 
three natural numbers, a < b < c, 
for which,

a^2 + b^2 = c^2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean 
triplet for which a + b + c = 1000.
Find the product abc.

 */

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
