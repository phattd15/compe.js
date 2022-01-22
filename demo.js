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