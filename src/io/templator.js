/**
 * This will process your file into OJ's format
 * @param {any} main - The main function
 * @param {string} inputDir - The directory of input
 */
const fs = require('fs');
const configPath = "./compe.config.json";

export function proc(main, inputDir) {
  global.MOD_ = 998244353;
  global.MOD_CUT = 444595123;
  if (fs.existsSync(configPath) && inputDir != "stdin") {
    if (!fs.existsSync(inputDir)) {
      console.log("Input directory does not exist");
      return;
    }
    let data = fs.readFileSync(inputDir, {encoding:"utf-8"});
    let dataIndex = 0;
    data = data.split(/ |\n|\r/g);
    let processedData = [];
    for (let chunk of data) {
      if (chunk.length > 0) processedData.push(chunk);
    }
    global.rnum = function(num) {
      return num ? +processedData[dataIndex ++] :  processedData.slice(dataIndex, dataIndex += num).map(a => +a);
    };
    global.rstr = function(num) {
      return num ? processedData[dataIndex ++] :  processedData.slice(dataIndex, dataIndex += num);
    };
    global.rbig = function(num) {
      return num ? BigInt(processedData[dataIndex ++]) :  processedData.slice(dataIndex, dataIndex += num).map(a => BigInt(a));
    };
    global.print = function(...args) {
      for (let printData of args)
        process.stdout.write(String(printData));
    }
    main();
  } else {
    let data = fs.readFileSync(inputDir, {encoding:"utf-8"});
    let dataIndex = 0;
    data = data.split(/ |\n|\r/g);
    let processedData = [];
    for (let chunk of data) {
      if (chunk.length > 0) processedData.push(chunk);
    }
    global.rnum = function(num) {
      return num ? +processedData[dataIndex ++] :  processedData.slice(dataIndex, dataIndex += num).map(a => +a);
    };
    global.rstr = function(num) {
      return num ? processedData[dataIndex ++] :  processedData.slice(dataIndex, dataIndex += num);
    };
    global.rbig = function(num) {
      return num ? BigInt(processedData[dataIndex ++]) :  processedData.slice(dataIndex, dataIndex += num).map(a => BigInt(a));
    };
    let dataBuffer = "";
    global.print = function(...args) {
      for (let printData of args)
        dataBuffer += String(printData);
    }
    main();
    console.log(dataBuffer);
  }
}