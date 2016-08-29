/*
Using names.txt, a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
*/
fs = require('fs');

var readFile = (readFileFunction = fs.readFileSync) => {
  var contents = readFileFunction("./names.txt").toString();
  return contents.split(",");
}

var swap = (contents, firstIndex, secondIndex) => {
  var temp = contents[firstIndex];
  contents[firstIndex] = contents[secondIndex];
  contents[secondIndex] = temp;
}

var partition = (items, start, end) => {
  var pivotIndex = Math.floor((start + end) / 2);
  var pivot   = items[pivotIndex];
  var i = start;
  var j = end;
  while (i <= j) {
    while (items[i] < pivot) {
        i++;
    }
    while (items[j] > pivot) {
        j--;
    }
    if (i <= j) {
        swap(items, i, j);
        i++;
        j--;
    }
  }
  return i;
}

var quickSort = (contents, start, end) => {
  var index;
  if (contents.length > 1 ){
    index = partition(contents, start, end);
    if (start < index - 1) {
        quickSort(contents, start, index - 1);
    }
    if (index < end) {
        quickSort(contents, index, end);
    }
  }
  return contents;
}

var sortContents = (contents) => {
  return quickSort(contents, 0, contents.length-1)
}

var getScoreOfWord = (word) => {
  var total = 0;
  for(var i = 1; i < word.length-1; i++){
    total+= word.charCodeAt(i) - 64;
  }
  return total;
}

var totalNameScores = (rf = readFile)=>{
  var total = 0;
  var contents = rf();
  var sortedContents = sortContents(contents);
  for(var i = 0; i < sortedContents.length; i++){
    total += (i+1) * getScoreOfWord(sortedContents[i])
  }
  return total;
}

module.exports = {readFile, totalNameScores, getScoreOfWord, sortContents};
