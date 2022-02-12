/**
 * This will process your file into OJ's format
 * @param {any} main - The main function
 * @param {string} inputDir - The directory of input
 */
const fs = require('fs');
const configPath = './compe.config.json';
import {setGlobalBuiltin} from "../util/builtin";

export function proc(main, inputDir) {
  global.MOD_ = 998244353;
  global.MOD_CUT = 444595123;
  setGlobalBuiltin();
  if (fs.existsSync(configPath)) {
    if (!inputDir.endsWith(".js")) {
      if (!fs.existsSync(inputDir)) {
        console.log('Input directory does not exist');
        return;
      }
      let data = fs.readFileSync(inputDir, { encoding: 'utf-8' });
      let dataIndex = 0;
      data = data.split(/ |\n|\r/g);
      let processedData = [];
      for (let chunk of data) {
        if (chunk.length > 0) processedData.push(chunk);
      }
      global.rnum = function(num) {
        return num
          ? processedData.slice(dataIndex, (dataIndex += num)).map(a => +a)
          : +processedData[dataIndex++];
      };
      global.rstr = function(num) {
        return num
          ? processedData.slice(dataIndex, (dataIndex += num))
          : processedData[dataIndex++];
      };
      global.rbig = function(num) {
        return num
          ? processedData.slice(dataIndex, (dataIndex += num)).map(a => BigInt(a))
          : BigInt(processedData[dataIndex++]);
      };
      global.print = function(...args) {
        for (let printData of args) process.stdout.write(String(printData));
      };
    } else {
      let rawData = fs.readFileSync(inputDir, {encoding:"utf-8"}).split('\n');
      let beginIndex = null, endIndex = null;
      for (let i = rawData.length - 1; i >= 0; i --) {
        if (rawData[i].startsWith("*/")) {
          endIndex = i;
          break;
        }
      }
      if (endIndex) {
        for (let i = endIndex - 1; i >= 0; i --) {
          if (rawData[i].startsWith("/*")) {
            beginIndex = i;
            break;
          }
        }
      }
      if (!beginIndex) {
        console.log("No input data at the end of file found");
        return;
      }
      let data = rawData.slice(beginIndex + 1, endIndex).join("\n").split(/ |\n|\r/g);
      let processedData = [];
      let dataIndex = 0;
      for (let chunk of data) {
        if (chunk.length > 0) processedData.push(chunk);
      }
      global.rnum = function(num) {
        return num
          ? processedData.slice(dataIndex, (dataIndex += num)).map(a => +a)
          : +processedData[dataIndex++];
      };
      global.rstr = function(num) {
        return num
          ? processedData.slice(dataIndex, (dataIndex += num))
          : processedData[dataIndex++];
      };
      global.rbig = function(num) {
        return num
          ? processedData.slice(dataIndex, (dataIndex += num)).map(a => BigInt(a))
          : BigInt(processedData[dataIndex++]);
      };
      global.print = function(...args) {
        for (let printData of args) process.stdout.write(String(printData));
      };
    }
    main();
  } else {
    let data = '';
    process.stdin.on('data', c => {
      data += c;
    });
    process.stdin.on('end', () => {
      let dataIndex = 0;
      data = data.split(/ |\n|\r/g);
      let processedData = [];
      for (let chunk of data) {
        if (chunk.length > 0) processedData.push(chunk);
      }
      global.rnum = function(num) {
        return num
          ? processedData.slice(dataIndex, (dataIndex += num)).map(a => +a)
          : +processedData[dataIndex++];
      };
      global.rstr = function(num) {
        return num
          ? processedData.slice(dataIndex, (dataIndex += num))
          : processedData[dataIndex++];
      };
      global.rbig = function(num) {
        return num
          ? processedData
              .slice(dataIndex, (dataIndex += num))
              .map(a => BigInt(a))
          : BigInt(processedData[dataIndex++]);
      };
      let dataBuffer = '';
      global.print = function(...args) {
        for (let printData of args) dataBuffer += String(printData);
      };
      main();
      console.log(dataBuffer);
    });
  }
}
