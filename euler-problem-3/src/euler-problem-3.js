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

var findFermantFactorization = function(a, number){
  if(number % 2 === 0){
    return 0;
  }

  var bSquared = a * a - number;
  while(Math.sqrt(bSquared) % 1 !== 0 && a < number){
    a += 1;
    bSquared = a*a-number;
  }
  if(Math.sqrt(bSquared) % 1 !== 0){
    return false;
  }
  return [a, Math.sqrt(bSquared)];
}

var isPrimeNumber = function(number){
  for(var i = 2; i < number; i++){
    if(number % i === 0){
      return false;
    }
  }
  return true;
}

var findPrimeNumber = function(number){
  var factors = findFermantFactorization(Math.ceil(Math.sqrt(number)), number);
  while(factors){
    var addFactor = factors[0] + factors[1];
    var subFactor = factors[0] - factors[1];
    console.log("addFactor: ", addFactor)
    console.log("subFactor: ", subFactor)
    if(isPrimeNumber(addFactor)){
      return addFactor;
    }
    if(isPrimeNumber(subFactor)){
      return subFactor;
    }
    factors = findFermantFactorization(factors[0]+1, number);
  }

  return primes;
}
