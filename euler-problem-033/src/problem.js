/*
The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8,
which is correct, is obtained by cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and
denominator.

If the product of these four fractions is given in its lowest common terms, find the value of the denominator.
*/

var findDen = () => {
  var num = 1;
  var den = 1;
  for(var i = 11; i < 100; i++){
    for(var j = i+1; j < 100; j++){
      var topFirst = Math.floor(i/10);
      var topSecond = i % 10;
      var bottomFirst = Math.floor(j/10);
      var bottomSecond = j % 10;
      var fraction = i / j;
      if(topSecond === bottomFirst){
        if(fraction === topFirst/bottomSecond && bottomSecond !== 0){
          num = num * i;
          den = den * j;
        }
      }
    }
  }
  return den/num;
}

module.exports = {findDen};

findDen()
