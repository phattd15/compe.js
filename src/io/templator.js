/**
 * This will process your file into OJ's format
 * @param {any} main - The main function
 * @param {string} inputDir - The directory of input
 */
const fs = require('fs');
const configPath = "./compe.config.json";

export function proc(main, inputDir) {
  if (fs.existsSync(configPath) && inputDir != "stdin") {
    if (!fs.existsSync(inputDir)) {
      console.log("Input directory does not exist");
      return;
    }
    let data = fs.readFileSync(inputDir, {encoding:"utf-8"});
    var lineIndex = 0;
    data = data.split('\n');
    const readline = function() {
      return data[lineIndex++];
    };
    const write = function(data) {
      // console.log(data);
      process.stdout.write(String(data));
    }
    main(readline, write);
  } else {
    let data = [];
    var rawData = "";
    let pendingData = "";
    let lineIndex = 0;
    process.stdin.on('data', (c) => {
      rawData += c;
    });
    process.stdin.on('end', () => {
      const {EOL} = require('os');
      data = rawData.split(EOL);
      const readline = function() {
        return data[lineIndex++];
      };
      const write = function(data) {
        // console.log(data);
        pendingData += String(data);
      };
      main(readline, write);
      console.log(pendingData);
    });
  }
}