var isDivisibleCreator = function(divisibleBy){
  return  function(number){
    return number % divisibleBy === 0;
  };
}
