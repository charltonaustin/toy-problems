var isEven = function(number){
  return number % 2 === 0;
}

var generateNextFibonacciNumber = function(first, second){
  return first + second;
}

var getSumOfEvens = function(limit){
  var first = 1;
  var second = 2;
  var term = 3;
  total = 2;
  while(term < limit){
    term = generateNextFibonacciNumber(first, second);
    if(isEven(term)){
      total += term;
    }
    first = second;
    second = term;
  }
  return total;
}
