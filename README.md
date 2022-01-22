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
const {proc, Reader} = require("compe");

function main(rl) {
  var rd = new Reader(rl);
  var arr = rd.readArray();
  var sum = 0;
  for (const elem of arr) {
    sum += elem;
  }
  write(sum);
}

proc(main, "input.txt");
```

# Compe commands
To be updated
```
compe
```
