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