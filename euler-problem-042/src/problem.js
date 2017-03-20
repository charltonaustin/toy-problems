fs = require('fs')

var readInFile = (fileReader=fs) => {
    return fileReader.readFileSync('../words.txt');
}

var splitWords = (words) => {
    return words.split(",");
}

var convertToNumber = (letter) => {
    if (letter.length == 1){
	return letter.toLowerCase().charCodeAt(0) - 96;
    }
}

var someFunction = () => {
  return 0;
}


module.exports = {someFunction,
		  readInFile,
		  splitWords,
		  convertToNumber,
		 };
