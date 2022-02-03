# Compe.js
A CLIxLibrary for Competitive Programming with JavaScript/Node.js
# Requirements
- Node v12.x or higher (preferably v16.x+)
- Set node modules to path variable to use cli
# Installation
For the package:
```
npm i compe
```
For the cli, you can:
```
npm i -g compe minify
```
You can add the prefix `npx` after every command as an alternative where you want to avoid installing global package.
Enable intellisense to get the best experience.
# Compe commands
Add `npx` prefix incase you don't have CLIs installed.
```
$ compe i <source-file.js> <input-file.txt>: Initialize the source file at source-file.js and the input file at input-file.txt (if input-file is empty then the default is 'input.txt')
$ compe s <source-file.js>: Save the source file directory as default
$ compe i s <source-file.js> <input-file.txt>: Initialize the file and then save to config
$ compe r <source-file.js>: If the config has default source file, source-file can be ignored. Run the source file and build it at source-file-build.js and fully compressed to submit on Online Judges at source-file-comp.js
```
# Getting your first AC
Make a txt (by default from template, it is "input.txt") file in the same directory with the one you want to run for stdin.
There are global functions that responsible for reading and writing where we will show in the following example.
Sample code for printing sum of an array at `demo.js` after init:
```
const {
  proc,                                 // IO & Processor
  multiArray, vectorArray,              // Fast array generators
  Deque, DSU, PriorityQueue,            // Data structures
  SparseTable, FenwickTree,             // Range query data structures
  Graph, dfs, bfs, mst, dijkstra, spfa, // Graph Algorithms
  setMod, add, sub, pow, inv, mul,      // Modular integer operations
  factSetup, fact, binom,               // Modular combinatorics
  lowerBound, upperBound, binarySearch, // Binary search 
  ternarySearch, integralExtremumSearch // Function extremum search
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
```
# Documentation
- This project uses TSTL's TreeSet where their documentation is [here](https://samchon.github.io/tstl/api/classes/std.treeset.html).
- To Be Updated...
# Platforms supported
- Leetcode
- Codeforces
- TBA: Atcoder, Hackerrank, ...
# Built with
- [TSTL library](https://github.com/samchon/tstl)
- TSDX
# Resources
- [cp-algorithms](https://cp-algorithms.com/)
- [codeforces archive](https://codeforces.com/catalog)
- This project is inspired by [AtCoder Library](https://codeforces.com/blog/entry/82400).