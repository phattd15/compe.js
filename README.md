# Compe.js

# Requirements
- Node v12.x or higher
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
# Build
```
npm run build
```
# Getting your first AC
Make a txt (by default from template, it is "input.txt") file in the same directory with the one you want to run for stdin.

The `main` function takes in `rd` and `wr` as a function to read and write.

Sample code for printing sum of an array at `demo.js`:
```
const {
  // Basic IO & Interaction
  proc, Reader,                                                       // IO & processor
  toInt, stringArray, intArray,                                       // Int & String typecast
  // STL (Source: tstl - https://samchon.github.io/tstl/api/modules/std.html)
  std,                                                                // The whole std
  Deque, Queue, List, Stack, Vector, VectorBoolean, Pair,             // Basic data structures
  TreeMap, TreeMultiMap, TreeSet, TreeMultiSet, PriorityQueue,        // Tree data structures
  lower_bound, upper_bound, binary_search,                            // Binary search
  sort, stable_sort, shuffle,                                         // Sorting
  min, max, min_element, max_element, count, copy, gcd, lcm, randint  // Utilities
} = require("compe");
// DO NOT EDIT THIS LINE //

function main(rl, wr) {
  var rd = new Reader(rl);
  // write your code here

  var x = rd.readArray();
  var sum = 0;
  for (var y of x) {
    sum += y;
  }
  wr(sum);
}

proc(main, "input.txt");
```

# Compe commands
Add `npx` prefix incase you don't have CLIs installed.
```
$ compe help: Help
$ compe run <file-name>: Run the file
$ compe init <file-name>: Init a template file at file-name
$ compe build <file-name>: Build the file to submit
$ compe bc <file-name>: Build the file and compress to reduce size for submission
```
# Platforms supported:
- Leetcode
- Codeforces
- TBA: Atcoder, Hackerrank, ...

# Resources:
- [TSTL library](https://github.com/samchon/tstl)
- TSDX