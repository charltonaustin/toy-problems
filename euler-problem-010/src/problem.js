var primesLessThan = (number) => {
  var primes = [2];
  for(var i = 3; i < number; i+=2){
    primes.push(i);
  }
  console.log("finished generating all the number");
  for(var i = 0; i < primes.length; i++){
    console.log("removing: ", primes.length);
    for(var j = i + 1; j < primes.length; j++){
      if(primes[j] % primes[i] === 0){
        primes.splice(j,1);
      }
    }
  }
  return primes;
}

var sumOfPrimesLessThan = (number) =>{
  var primes = primesLessThan(number);
  console.log(primes);
  var total = 0;
  for(var i = 0; i < primes.length; i++){
    total+= primes[i];
  }
  return total;
}

module.exports = {sumOfPrimesLessThan};
