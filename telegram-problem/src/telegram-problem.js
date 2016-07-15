var createWriter = function(w){
  var writer = function(lines){

    var output = "";
    var words = lines.replace("\n", " ").split(" ")
    var currentOutput = words[0];
    var currentLineLength = words[0].length;

    for(var i = 1; i< words.length; i++){

      var word = words[i];

      if(currentLineLength + word.length + 1 > w){
        output += currentOutput + "\n";
        currentOutput = word;
        currentLineLength = word.length;
      } else {
        currentOutput += " " + word;
        currentLineLength += word.length + 1;
      }
    }

    output+= currentOutput;

    return output;
  }

  return writer;
}
