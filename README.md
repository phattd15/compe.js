# Compe.js

# Requirements
- Node v12.x or higher
- Set node modules to path variable to use cli
# Installation
```
npm i -g minify compe
npm i compe
```

# Build
```
npm run build
```

# Usage
make a txt file in the same directory with the one you want to run for stdin.

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
}

proc(main, "input.txt");
```

# Compe commands
To be updated
```
$ compe help: Help
$ compe run <file-name>: Run the file
$ compe init <file-name>: Init a template file at file-name
$ compe build <file-name>: Build the file to submit
$ compe bc <file-name>: Build the file and compress to reduce size for submission
```
