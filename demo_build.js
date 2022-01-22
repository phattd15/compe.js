/**
 * @description Parse the string into integer
 * @param input
 * @returns integer
 */
var toInt = function toInt(input) {
  return parseInt(input);
};
/**
 * @description Parse the string into array of strings
 * @param input
 * @returns [string]
 */


var stringArray = function stringArray(input) {
  return input.split(' ');
};
/**
 * @description Parse the string into array of integers
 * @param input
 * @returns [integers]
 */


var intArray = function intArray(input) {
  return input.split(' ').map(function (x) {
    return toInt(x);
  });
};
/**
 * IO object for read and write
 */


var Reader = /*#__PURE__*/function () {
  function Reader(readline) {
    this.rl = readline;
  }
  /**
   * @description Read the integer on this line
   * @returns integer
   */


  var _proto = Reader.prototype;

  _proto.readInt = function readInt() {
    return toInt(this.rl());
  }
  /**
   * @description Read the whole line as the string
   * @returns Read the whole line as a string
   */
  ;

  _proto.readLine = function readLine() {
    return this.rl();
  }
  /**
   * @description Read the whole line as an array
   * @returns The number array
   */
  ;

  _proto.readArray = function readArray() {
    return intArray(this.rl());
  };

  return Reader;
}();

/**
 * This will process your file into OJ's format
 * @param {any} main - The main function
 * @param {string} inputDir - The directory of input
 */
function proc(main, inputDir) {
  if (typeof process !== 'undefined') {
    var fs = require('fs');

    fs.readFile(inputDir, 'utf8', function (err, data) {
      var lineIndex = 0;

      if (err) {
        return console.log(err);
      }

      data = data.split('\n');

      global.readline = function () {
        return data[lineIndex++];
      };

      global.print = function (data) {
        process.stdout.write(String(data));
        process.stdout.write("\n");
      };

      global.write = function (data) {
        process.stdout.write(String(data));
      };

      main(readline, write);
    });
  } else {
    main(readline, write);
  }
}

function main(rl, wr) {
  var rd = new Reader(rl);
  // write your code here
}

proc(main, "input.txt");
// Generated with compe.js - https://github.com/polarity-cf/compe.js