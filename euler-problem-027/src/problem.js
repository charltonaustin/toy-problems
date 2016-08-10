/*
Euler discovered the remarkable quadratic formula:
n^2+n+41
It turns out that the formula will produce 40 primes for the consecutive integer values 0≤n≤39. However, when n=40, 40^2+40+41=40(40+1)+41 is divisible by 41, and certainly when n=41, 41^2+41+41 is clearly divisible by 41.
The incredible formula n^2−79n+1601 was discovered, which produces 80 primes for the consecutive values 0≤n≤79. The product of the coefficients, −79 and 1601, is −126479.
Considering quadratics of the form:
n^2+an+b, where |a|<1000 and |b|≤1000
where |n| is the modulus/absolute value of n
e.g. |11|=11 and |−4|=4
Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n=0.
*/

// I went and found the large prime generator
var findPrimeN = function(number){
  var primes = [2]
  var numbers = [];
  while(primes.length < number){
    // Grow the numbers array
    var start = primes[primes.length-1] + 1;
    var growth = primes[primes.length-1];
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

    // move prime numbers to primes
    for(var i = 0; i < numbers.length; i++){
      primes.push(numbers[i]);
    }
    numbers = [];
  }
  return primes;
}

var someFunction = () => {
  // since n=0 => b must be prime, b must be a prime number less than 1000.
  // and since any even number is divisiable by and n=1 => 1 + a + b a must be odd
  // we know that a must also be odd 
  // (a + b + 1) => (odd + odd + 1) => (even + 1) => odd

  // generate the some large number of primes (say xPrimes)
  // take b s.t. b is prime and |b| < 1000
    // take a s.t. a is odd and |a| < 1000
    // take n s.t. n = 0,1,2,3,4...
       // call n^2 + n*a + b current
       // if current < last of primes and in primes continue to next n
       // if current > last of primes return error and increase xPrimes
       // if current < last of primes and not in primes return n-1
    // if currentN is greater than greatest set currentN as greatestN
       // set a as greatestA
       // set b as greatestB
    // get next a
  // get next b
  return 0;
}

module.exports = {someFunction};
