const {
  Reader, proc,                           // IO & Processor
  multiArray, vectorArray,                // Fast array generators
  TreeSet, Deque, DisjointSetUnion,       // Data structures
  Graph, dfs, bfs, minimumSpanningTree    // Graph Algorithms
} = require('./dist');
// DO NOT EDIT THIS LINE //

function main(rl, wr) {
  let rd = new Reader(rl);
  // write your code from here
  let x = rd.readArray();
  let sum = 0;
  for (let y of x) {
    sum += y;
  }
  wr(y);
}

proc(main, 'input.txt');