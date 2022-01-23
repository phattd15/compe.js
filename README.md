# Compe.js

# Requirements
- Node v12.x or higher
- Set node modules to path variable to use cli
# Installation
For the package
```
npm i compe
```
For the cli, you can:
```
npm i -g compe minify
```
You can add the prefix `npx` after every command as an alternative where you want to avoid installing global package
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
  proc, Reader, // IO & processor
  toInt, stringArray, intArray // Int & String typecast
} = require("compe");
// DO NOT EDIT ABOVE THIS LINE - compe.js //

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
