/*
If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

{20,48,52}, {24,45,51}, {30,40,50}

For which value of p ≤ 1000, is the number of solutions maximised?
*/

var calculatePerimeter = (n, m, k) => {
  return k * (m*m - n*n) + k * (2 * m * n) + k * (m * m + n * n);
}

var tripletExists = (array, triplet) => {
  for(var i = 0; i < array.length; i++){
    if(array[0][i] === triplet[0]){
      return true;
    }
  }
  return false;
}

var findMostSolutions = () => {
  var highestNumberOfSolutions = 0;
  var numberOfSolutions = {};
  var n = 1;
  var m = n + 1
  var k = 1;
  var p = calculatePerimeter(n, m, k);
  while(true){
    while(true){
      while(true){
        var maybeNumber = numberOfSolutions[p];
        var triplet = [k * (m*m - n*n), k * 2 * m * n, k * (m * m + n * n)].sort();
        if(maybeNumber && !tripletExists(maybeNumber[1], triplet)){
          maybeNumber[0]+= 1
          maybeNumber[1].push(triplet)
        }else{
          numberOfSolutions[p] = [1, [triplet]]
        }
        k++
        p = calculatePerimeter(n, m, k);
        if(p > 1000){
          k = 1;
          break;
        }
      }
      m++
      p = calculatePerimeter(n, m, k);
      if(p > 1000){
        m = n + 2
        break;
      }
    }
    n++
    p = calculatePerimeter(m, n, k);
    if(p > 1000){
      break;
    }
  }
  var mostSolutions = 0;
  var mostSolutionsKey = -1;
  for(var key in numberOfSolutions){
    if(numberOfSolutions[key][0] > mostSolutions){
      mostSolutions = numberOfSolutions[key][0];
      mostSolutionsKey = key;
    }
  }
  return parseInt(mostSolutionsKey);
}

module.exports = {findMostSolutions};
