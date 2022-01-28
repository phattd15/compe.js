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
The `main` function takes in `rd` and `wr` as a function to read and write.
Sample code for printing sum of an array at `demo.js` after init:
```
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