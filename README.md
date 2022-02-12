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
const { proc } = require('compe');
// DO NOT EDIT ABOVE THIS LINE //
function main() {
  // Read the 2 dimensions of the matrix
  let [n, m] = rnum(2);

  // Initialize the matrix with cell values of 0
  let a = array(0, n, m);

  // Initialize the sum and minimum value
  let sum = 0, minVal = Number.MAX_SAFE_INTEGER;

  // For each row
  for (let i = 0; i < n; i ++) {

    // Read the m elements of that row
    a[i] = rnum(m);
    
    // Update the sum for every elements
    for (let value of a[i]) {
      sum += value;
    }
    
    // Update the minimum value with the minimum of that row
    minVal = min(minVal, minElement(a[i]).res);
  }

  // Print the sum and minimum value, seperated by space
  print(sum, " ", minVal);
}
proc(main, __filename);
/* BELOW THIS LINE IS YOUR INPUT
3 4
1 2 3 4
4 -3 1 3
5 7 0 3
*/
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