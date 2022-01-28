const {
  proc, Reader,                       // IO & processor
  multiArray, vectorArray,            // Fast array generators
  TreeSet, Deque, DisjointSetUnion,   // For common data structures
  Graph, dfs, bfs, 
	minimumSpanningTree									// Graph algorithms
} = require("compe");
// DO NOT EDIT THIS LINE //

function main(rl, wr) {
  let rd = new Reader(rl);
  // write your code from here

	var x = rd.readArray();
	var sum = 0;
	for (var y of x) {
		sum += y;
	}
	wr(y);
}

proc(main, "input.txt");