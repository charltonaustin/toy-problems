/*
The number, 197, is called a circular prime
because all rotations of the digits: 197,
971, and 719, are themselves prime.

There are thirteen such primes below 100:
2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73,
79, and 97.

How many circular primes are there below
one million?
*/

var createPrimeSet = (primes) => {
  var primeSet = {}
  for(var i = 0; i < primes.length; i++){
    primeSet[primes[i]] = true;
  }
  return primeSet;
}

var findPrimeN = function(number){
  var primes = [2, 3]
  var numbers = [];
  while(primes[primes.length - 1] < number){
    // Grow the numbers array
    var start = primes[primes.length-1] + 2;
    var growth = primes[primes.length-1];
    for(var i = start; i < start + growth; i+=2){
      numbers.push(i);
    }
    // Remove composite numbers
    for(var i = 0; i < primes.length; i++){
      for(var j = 0; j < numbers.length; j++){
        if(numbers[j] % primes[i] === 0){
          numbers.splice(j,1);
        }
      }
    }
    // move prime numbers to primes
    for(var i = 0; i < numbers.length; i++){
      primes.push(numbers[i]);
    }
    numbers = [];
  }
  return primes;
}

var rotateNumber = (number) => {
  if(number < 10){
    return number;
  }
  var digit = number % 10;
  if(digit === 0){
    return number;
  }
  var base = Math.floor(number / 10);
  return parseInt(digit+""+base);
}

var findNumberOfCircularPrimes = (limit) => {
  var primeSet = createPrimeSet(findPrimeN(limit));
  var circularPrimes = [];
  for(var prime in primeSet){
    var prime = parseInt(prime);
    var r = rotateNumber(prime);
    var allArePrime = true;
    while(prime !== r && allArePrime){
      if(!primeSet[r]){
        allArePrime = false;
      }
      r = rotateNumber(r);
    }
    if(allArePrime && prime < limit){
      circularPrimes.push(prime);
    }
  }
  return circularPrimes.length;
}

module.exports = {rotateNumber, findNumberOfCircularPrimes};
