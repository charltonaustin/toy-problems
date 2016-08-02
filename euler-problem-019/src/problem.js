/*
You are given the following information, but you may prefer to do some research for yourself.

    1. 1 Jan 1900 was a Monday.
    1. Thirty days has September,
    April, June and November.
    All the rest have thirty-one,
    Saving February alone,
    Which has twenty-eight, rain or shine.
    And on leap years, twenty-nine.
    1. A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/
var months = {sept: 30, april: 30, june: 30, nov: 30, jan: 31, march: 31, may: 31, july: 31, aug: 31, oct: 31, dec: 31};
var numToMonth = {1: "jan", 2: "feb", 3: "march", 4: "april", 5: "may", 6: "june", 7: "july", 8: "aug", 9: "sept", 10: "oct", 11: "nov", 12: "dec"}

var getDaysInFeb = (year)=>{
  if(year % 4 === 0 && year % 100 !== 0){
    return 29
  }
  if(year % 100 === 0 && year % 400 === 0 ){
    return 29
  }
  return 28
}

var getEndOfTheMonth = (year, month) => {
  if(month === 2){
    return getDaysInFeb(year);
  }
  return months[numToMonth[month]];
}

var getStartingDay = (startingDay) => {
  return () => {
    return (startingDay++ % 7) + 1;
  }
}

var findSundaysOnFirst = () => {
  var total = 0;
  var dayOfTheWeek = getStartingDay(0);
  for(var year = 1901; year < 2001; year++){
    for(var month = 1; month < 13; month++){
      var endOfTheMonth = getEndOfTheMonth(year, month);
      for(var dayOfTheMonth = 1; dayOfTheMonth < endOfTheMonth+1; dayOfTheMonth++){
        var day = dayOfTheWeek();
        if(day === 7 && dayOfTheMonth === 1){
          total++;
        }
      }
    }
  }
  return total;
}

module.exports = {findSundaysOnFirst, getEndOfTheMonth};
