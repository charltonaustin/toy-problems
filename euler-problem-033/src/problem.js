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
      if((i % 10) === Math.floor(j/10) && (i/j) === Math.floor(i/10)/(j % 10)){
        num = num * i;
        den = den * j;
      }
    }
  }
  return den/num;
}

module.exports = {findDen};
