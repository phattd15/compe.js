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
Enable intellisense to get the best experience. We will continue as you haven't installed it globally.
# Getting your first AC
Go to the folder where you want to do the coding. Then type:
```
npx compe i s main.js
```
This will initialize all the config, and you will do all the coing in `main.js` file.
Your `main.js` file now should look like this:
```
const { proc } = require('compe');
// DO NOT EDIT ABOVE THIS LINE //
function main() {
  // Write your code here
    
}
proc(main, __filename);
```
Here, you will do all the coding below the `// DO NOT EDIT ABOVE THIS LINE //` and above the `proc(main, __filename);`. Except for the parts being called from the library, which should stay in the same bracket with `proc`, you should not write anything else above the warning line since they will be replaced with the actual library for submission later. The part below `proc` will be the input. 

There are some global functions that responsible for reading and writing where we will show in the following example.

Sample code for printing sum and minimum value of a `n x m` matrix after init:
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
If you are trying to solve in a leetcode format, you will definitely need to import and use `setGlobalBuiltin()` in your solution function to make the builtin functions work.
# [Documentation](https://github.com/polarity-cf/compe.js/wiki#)
# Platforms supported
- Leetcode
- Codeforces
- Atcoder, Hackerrank, ...
# Resources
- [cp-algorithms](https://cp-algorithms.com/)
- [codeforces archive](https://codeforces.com/catalog)
- This project is inspired by [AtCoder Library](https://codeforces.com/blog/entry/82400).
