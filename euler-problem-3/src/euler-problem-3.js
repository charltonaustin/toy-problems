var findPrimesLessThan = function(number){
  var primes = [];
  for (var i = 2; i < number; i++){
    primes.push(i);
  }
  for(var i = 0; i < Math.sqrt(primes.length); i++){
    for(var j = i + 1; j < primes.length; j++){
      if(primes[j] % primes[i] === 0){
        primes.splice(j,1);
      }
    }
  }
  return primes;
}

var isPrimeFactor = function(number, prime){
  return number % prime === 0;
}

var findPrimeFactors = function(number){
  var primes = findPrimesLessThan(number);
  var largestPrimeFactor = primes[0];
  for(var i = 0; i < primes.length; i++){
    if(isPrimeFactor(number, primes[i]) && primes[i] > largestPrimeFactor){
      largestPrimeFactor = primes[i];
    }
  }
  return largestPrimeFactor;
}
