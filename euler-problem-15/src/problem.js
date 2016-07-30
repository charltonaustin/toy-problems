/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
How many such routes are there through a 20×20 grid?
*/

var createNode = (i, j, value) => {
  return {i: i, j: j, value:value};
}

var createGraph = (numberOfBlocks) =>{
  var edges = {};
  var length = numberOfBlocks + 1
  for(var i = 0; i < length; i++){
    for(var j = 0; j < length; j++){
      var currentEdges = {};
      if(j+1 < length){
        currentEdges['right'] = createNode(i, j+1, length*i + (j+1));
      }   
      if(i+1 < length){
        currentEdges['down'] = createNode(i+1, j, length*(i+1) + j);
      }
      currentEdges['value'] = length*i + j;
      currentEdges['j'] = j;
      currentEdges['i'] = i;
      edges[length*i + j] = currentEdges;
    }
  }
  return edges;
}

var toTheLeftOf = (node,endNode) => {
  return  node.j < endNode.j
}

var isAbove = (node, endNode) => {
  return node.i < endNode.i
}

var countPaths = (node, endNode, graph, numberOfPaths) => {
  var numberOfPaths = 0;
  var toVisit = [node];
  var lastPlaceTurnedRight = [];
  while(toVisit.length > 0){
    node = toVisit.pop();
    if(node.value === endNode.value){
      numberOfPaths++;
      var lastRight = lastPlaceTurnedRight.pop();
      if(lastRight){
        toVisit.push(graph[lastRight['down']['value']]);
      }
    }else if(isAbove(node, endNode) && toTheLeftOf(node,endNode)){
      lastPlaceTurnedRight.push(node);
      toVisit.push(graph[node['right']['value']]);
    }else if(toTheLeftOf(node, endNode)){
      toVisit.push(graph[node['right']['value']]);
    }else if(isAbove(node, endNode)){
      toVisit.push(graph[node['down']['value']]);
    }
  }
  return numberOfPaths;
}

var findNumberOfRoutes = (numberOfBlocks) => {
  var graph = createGraph(numberOfBlocks);
  var numberOfPaths = [];
  for(var i = 1; i < numberOfBlocks + 2; i++){
    numberOfPaths.push(countPaths(graph[0], graph[numberOfBlocks * i], graph));
  }
  var total = 0;
  for(var i = 0; i < numberOfPaths.length; i++){
    total += numberOfPaths[i] * numberOfPaths[i];
  }
  return total;
}

module.exports = findNumberOfRoutes;
