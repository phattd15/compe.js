const {
  proc, Reader,                       // IO & processor
  multiArray, vectorArray,            // Fast array generators
  TreeSet, Deque,                     // For common data structures
  Graph, dfs                          // Graph algorithms
} = require("compe");
// DO NOT EDIT THIS LINE //

function main(rl, wr) {
  let rd = new Reader(rl);
  // write your code here
  
  var x = rd.readArray();
  var sum = 0;
  for (var y of x) {
    sum += y;
  }
  wr(sum);
}

try {
  proc(main, "input.txt");
} catch(err) {
  console.log(err);
}