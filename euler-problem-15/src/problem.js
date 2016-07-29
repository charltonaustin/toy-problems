/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?
*/

var createGraph = (numberOfBlocks) =>{
  var edges = [];
  var length = numberOfBlocks + 1
  for(var i = 0; i < length; i++){
    for(var j = 0; j < length; j++){
      var currentEdges = [];
      if(j+1 < length){
        currentEdges.push(length*i + (j+1));
      }   
      if(i+1 < length){
        currentEdges.push(length*(i+1) + j);
      }
      edges.push(currentEdges);
    }
  }
  return edges;
}

var nodeString = (node) => {
  var str = "";
  for(var i=0; i < node.length; i++){
    str+=node[i]+":";
  }
  return str;
}

var findNumberOfRoutes = (numberOfBlocks) => {
  var graph = createGraph(numberOfBlocks);
  var numberOfPaths = 0;
  var alreadyCounted = {};
  var countPaths = (node) => { 
    var toVisit = [];
    toVisit.push(node);
    var lastPlaceTurnedRight = [];
    while(toVisit.length > 0){
      node = toVisit.pop();
      if(node.length === 0 || alreadyCounted[nodeString(node)]){
        numberOfPaths++;
        var lastRight = lastPlaceTurnedRight.pop();
        if(lastRight){
          toVisit.push(graph[lastRight[1]]);
        }
      }else if(node.length === 2){
        lastPlaceTurnedRight.push(node);
        toVisit.push(graph[node[0]]);
      }else if (node.length === 1){
        toVisit.push(graph[node[0]]);
        alreadyCounted[nodeString(node)] = true;
      }
    }
  }
  countPaths(graph[0])
  return numberOfPaths;
}


module.exports = {findNumberOfRoutes,
                  createGraph};
