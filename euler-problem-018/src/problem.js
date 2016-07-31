

/*By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

   3 
  7 4
 2 4 6
8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom of the triangle below:

                   75
                  95 64
                17 47 82
               18 35 87 10
              20 04 82 47 65
             19 01 23 75 03 34
            88 02 77 73 07 63 67
           99 65 04 28 06 16 70 92
          41 41 26 56 83 40 80 70 33
         41 48 72 33 47 32 37 16 94 29
        53 71 44 65 25 43 91 52 97 51 14
       70 11 33 28 77 73 17 78 39 68 17 57
      91 71 52 38 17 14 91 43 58 50 27 29 48
     63 66 04 68 89 53 67 30 73 16 69 87 40 31
    04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)
*/

class Tree {
  constructor(number, id = 0) {
    this.value = number;
    this.left = undefined;
    this.right = undefined;
    this.visited = false;
    this.id = id;
  }
  insert(number) {
    if(this.left === undefined){
      this.left = new Tree(number, this.id+1);
      return this.left;
    }
    if(this.right === undefined){
      this.right = new Tree(number, this.id+2);
      return this.right;
    }
  }
}

var parseTriangle = (triangle) => {
  var lines = triangle.trim().split("\n");
  var ints = [];
  
  for(var i = 0; i < lines.length; i++){
    var nums = lines[i].trim().split(" ");
    for(var j = 0; j < nums.length; j++){
      var currentNum = parseInt(nums[j]);
      ints.push(currentNum);
    }
  }

  var root = new Tree(ints[0]);
  var nodes = [root];
  for(var i = 0; i*2 < ints.length-2; i++){
    nodes[i].insert(ints[i*2 + 1]);
    nodes[i].insert(ints[i*2 + 2]);
    nodes.push(nodes[i].left);
    nodes.push(nodes[i].right);
  }
  
  return root;
}

var depthFirst = (rootNode) => {
  var toVisit = [rootNode];
  var visitAfter = [];
  var totals = []
  var currentTotal = 0;
  var totalsAt = {}
  while(toVisit.length > 0){
    var node = toVisit.pop();
    totalsAt[node.id] = currentTotal;
    currentTotal += node.value;
    if(node.left && !node.left.visited){
      node.left.visited = true;
      toVisit.push(node.left);
      visitAfter.push(node);
    }else if(node.right && !node.right.visited){
      node.right.visited = true;
      toVisit.push(rootNode.right);
    }else {
      var maybeNode = visitAfter.pop();
      totals.push(currentTotal);
      if(maybeNode){
        currentTotal = totalsAt[maybeNode.id];
        toVisit.push(maybeNode);
      }
    }
  }
  return totals;
}

var findMaximumTotal = (triangle) => {
  var tree = parseTriangle(triangle);
  var totals = depthFirst(tree); 
  var max = totals[0] || 0;
  for(var i = 0; i < totals.length; i++){
    if(max < totals[i]){
      max = totals[i];
    }
  }
  return max;
}

module.exports = {findMaximumTotal, parseTriangle, depthFirst};
