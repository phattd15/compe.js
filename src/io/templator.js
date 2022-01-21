/**
 * This will process your file into OJ's format
 * @param {any} main - The main function
 * @param {string} inputDir - The directory of input
 */
export function proc(main, inputDir) {
  if (typeof process !== 'undefined') {
    const fs = require('fs');
    fs.readFile(inputDir, 'utf8', function(err, data) {
      var lineIndex = 0;
      if (err) {
        return console.log(err);
      }
      data = data.split('\n');
      global.readline = function() {
        return data[lineIndex++];
      };
      global.print = function(data) {
        process.stdout.write(String(data));
        process.stdout.write("\n");
      };
      global.write = function(data) {
        process.stdout.write(String(data));
      }
      main(readline, write);
    });
  } else {
    main(readline, write);
  }
}