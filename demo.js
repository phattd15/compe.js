const {
  proc, Reader,                                 // IO & processor
  toInt, stringArray, intArray,                 // Int & String typecast
  TreeSet, Deque,                               // For common data structures
} = require("compe");
// DO NOT EDIT THIS LINE //

function main(rl, wr) {
  let rd = new Reader(rl);
  // write your code here
  
  var x = rd.readArray();
  var sum = 0;
  for (var y of x) {
    sum += y;
  }
  wr(sum);
}

proc(main, "input.txt");