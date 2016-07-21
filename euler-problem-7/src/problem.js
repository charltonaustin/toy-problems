var findPrimeN = function(number){
  var primes = [2, 3]
  var numbers = [];
  while(primes.length < number){
    var start = primes[primes.length-1] + 1;
    var growth = primes[primes.length-1];
    // Grow the numbers array
    for(var i = start; i < start + growth; i++){
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


    for(var i = 0; i < numbers.length; i++){
      for(var j = 1; j < numbers.length; j++){
        if(numbers[j] % number[i] === 0){
          number.splice(j,1);
        }
      }
    }

    // move a prime from numbers to primes
    for(var i = 0; i < numbers.length; i++){
      primes.push(numbers[i]);
    }
    numbers = [];
  }
  return primes[number - 1];
}


module.exports = findPrimeN;
