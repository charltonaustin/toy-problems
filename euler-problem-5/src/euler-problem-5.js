var isDivisibleCreator = function(divisibleBy){
  return  function(number){
    return number % divisibleBy === 0;
  };
}

var isDivisibleByRangeCreator = function(range){
  var checkers = [];
  for(var i = 1; i < range + 1; i++){
    checkers.push(isDivisibleCreator(i));
  }
  return function(number){
    for(var i = 0; i < checkers.length; i++){
      if(!checkers[i](number)){
        return false;
      }
    }
    return true;
  };
}

var smallestDivisbleBy = function(){
  return 0;
}
