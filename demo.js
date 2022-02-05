const {
  proc,                                                       // IO & Processor
  multiArray, vectorArray,                                    // Fast array generators
  Deque, DSU, PriorityQueue,                                  // Common data structures
  SparseTable, FenwickTree, SegmentTree, LazySegmentTree,     // Range query data structures
  Graph, dfs, bfs, mst, dijkstra, spfa,                       // Graph Algorithms
  setMod, add, sub, pow, inv, mul,                            // Modular integer operations
  binomSetup, fact, binom,                                    // Modular combinatorics
  lowerBound, upperBound, binarySearch,                       // Binary search 
  ternarySearch, integralExtremumSearch,                      // Function extremum search
  Tree                                                        // Tree
} = require('compe');
// DO NOT EDIT THIS LINE //
function main() {
  // write your code from here
  // sample code of finding sum of an array and its maximum element

  // read the length of the array
  let n = rnum();
  
  // read the whole array
  let arr = rnum(n);

  // calculate the sum
  let sum = 0;
  let maxElement = -1;
  for (let x of arr) {
    sum += x;
    maxElement = maxElement < x ? x : maxElement;
  }

  // print out the 2 values
  print(sum, " ", maxElement);
}
proc(main, 'demoinput.txt');
