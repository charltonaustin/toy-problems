const baseNumbers = {0:"zero" ,1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty", 30: "thirty", 40 :"forty", 50: "fifty", 60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety"};

var getNumber = (currentNum, i) => {
  var number = [];
  debugger
  while(currentNum > 0){
    if(currentNum % 10 !== 0 || i < 20){
      var digit = currentNum % 10;
      currentNum = Math.floor(currentNum / 10);
    }else{
      var digit = currentNum;
      currentNum = 0;
    }
    if(number.length === 0){
      number.push(baseNumbers[digit]);
    }
    else if(number.length === 1){
      number.push(baseNumbers[digit * 10])
    }
  }
  return number;
}

var generateWords = () => {
  var allNumbers = [];
  for(var i = 1; i < 100; i++){
    var currentNum = i;
    var number = getNumber(currentNum, i);
    for(var j = 0; j < number.length; j++){
      allNumbers.push(number[j]);
    }
  }
  for(var i = 100; i< 1000; i++){
    var currentNum = i % 100;
    var firstDigit = Math.floor(i / 100);
    if(currentNum === 0){
      allNumbers.push(baseNumbers[firstDigit],"hundred");
    }else{
      var number = getNumber(currentNum, currentNum);
      number.unshift(baseNumbers[firstDigit], "hundred", "and");
      for(var j = 0; j < number.length; j++){
        allNumbers.push(number[j]);
      }
    }
  }
  allNumbers.push("one");
  allNumbers.push("thousand");
  return allNumbers;
}

var countLetters = () => {
  var words = generateWords();
  var total = 0;
  for(var i = 0; i < words.length; i++){
    total += words[i].length;
  }
  return total;
}

module.exports = countLetters;
