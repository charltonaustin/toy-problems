/*
The number 3797 has an interesting property. Being prime itself, it is possible to
continuously remove digits from left to right, and remain prime at each stage:
3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37,
and 3.

Find the sum of the only eleven primes that are both truncatable from left
to right and right to left.

NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
*/
var alreadyFound = {};
var isPrime = (number) => {
  if(alreadyFound[number]){
    return alreadyFound[number];
  }
  for(var i = 2; i < number; i++){
    if(number % i === 0){
      alreadyFound[number] = false;
      return false;
    }
  }
  alreadyFound[number] = true;
  return true;
}

var checkTruncateLeft = (number) =>{
  for(var i = 2; i < number.length; i++){
    var temp = parseInt(number.slice(0,i))
    if(!isPrime(temp)){
      return false;
    }
  }
  return true;
}


var checkTruncateRight = (number) => {
  for(var i = 0; i < number.length; i++){
    var temp = parseInt(number.substring(number.length,i))
    if(!isPrime(temp)){
      return false;
    }
  }
  return true;
}

var findTruncatablePrimes = () => {
  var truncatablePrimes = [23, 37, 53, 73]
  var k = 0;
  var threeSeven = [3,7];
  while(truncatablePrimes.length < 11){
    var number = "" + k
    for(var i = 0; i < threeSeven.length; i++){
      for(var j = 0; j < threeSeven.length; j++){
        var possibleTruncatablePrime = threeSeven[i] + number + threeSeven[j];
        if(checkTruncateLeft(possibleTruncatablePrime) && checkTruncateRight(possibleTruncatablePrime)){
          truncatablePrimes.push(parseInt(possibleTruncatablePrime))
        }
      }
    }
    k++
  }
  var total = 0;
  for(var i = 0; i < truncatablePrimes.length; i++){
    total+= truncatablePrimes[i];
  }
  return total;
}

module.exports = {findTruncatablePrimes, checkTruncateLeft, checkTruncateRight};
