#! /usr/bin/env node
const { exec } = require("child_process");
const fs = require('fs');

async function executor(script, cb) {
  console.log(`> ${script}`);
  exec(script, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(stdout);
    if (cb) cb();
  });
}

// const args = process.argv;
// const warningString = "// DO NOT EDIT";
// const configPath = "./compe.config.json";
// const advertisement = "\n// Generated with compe.js - https://github.com/polarity-cf/compe.js";

// if (args.length == 2) {
//   console.log("This is Compe.js - a CLI x Library for competitive programming on Node.js environment.");
//   console.log("Available commands:");
//   console.log("$ compe i <source-file.js> <input-file.txt>: Initialize the source file at source-file.js and the input file at input-file.txt (if input-file is empty then the default is 'input.txt')");
//   console.log("$ compe s <source-file>.js: Save the source file directory as default");
//   console.log("$ compe i s <source-file>.js <input-file.txt>: Initialize the file and then save to config");
//   console.log("$ compe r <source-file>.js: Run the source file and build it at source-file-build.js and fully compressed to submit on Online Judges at source-file-comp.js");
// } else {
//   // initialize config
//   try {
//     if (!fs.existsSync(configPath)) {
//       console.log("Creating config file at compe.config.json");
//       fs.writeFileSync(configPath, JSON.stringify({
//         username: process.env.USERNAME
//       }));
//     }
//     if (args[2] == "init" || args[2] == "i") {
//       let sourcePath = null;
//       let inputPath = null;
//       for (let i = 3; i < args.length; i ++) {
//         if (args[i].endsWith(".js")) {
//           sourcePath = args[i];
//         } else if (args[i].endsWith(".txt")) {
//           inputPath = args[i];
//         }
//       }
//       if (!sourcePath) {
//         console.log("No source path identified");
//         process.exit(1);
//       } else {
//         const templateData = fs.readFileSync(__dirname + "/../src/template.txt", {encoding:"utf-8"});
//         fs.writeFileSync(sourcePath, templateData.replace(/input.txt/g, inputPath ? inputPath : "input.txt"));
//         console.log("Source code initialized at " + sourcePath);
//       }
//       if (inputPath) {
//         fs.writeFileSync(inputPath, "");
//         console.log("Input file initialized at " + inputPath);
//       } else {
//         fs.writeFileSync("input.txt", "");
//         console.log("Input is taken from the default of input.txt");
//       }
//       let saveSource = false;
//       for (let argsc of args) {
//         if (argsc == "s" || argsc == "save") {
//           saveSource = true;
//         }
//       }
//       if (saveSource && sourcePath) {
//         let configData = JSON.parse(fs.readFileSync(configPath).toString());
//         configData.sourcePath = sourcePath;
//         fs.writeFileSync(configPath, JSON.stringify(configData));
//         console.log("Default source code is set to " + sourcePath);
//       }
//     } else if (args[2] == "save" || args[2] == "s") {
//       // modify config file
//       let configData = JSON.parse(fs.readFileSync(configPath).toString());
//       for (let i = 3; i < args.length; i ++) {
//         if (args[i].endsWith(".js")) {
//           configData.sourcePath = args[i];
//           console.log("Default source code is set to " + args[i]);
//         } else {
//           console.log(args[i] + " is unidentified");
//         }
//       }
//       fs.writeFileSync(configPath, JSON.stringify(configData));
//     } else if (args[2] == "run" || args[2] == "r") {
//       let sourcePath = null;
//       if (args.length == 3) {
//         let configData = JSON.parse(fs.readFileSync(configPath).toString());
//         if ("sourcePath" in configData) {
//           sourcePath = configData.sourcePath;
//         }
//       } else {
//         for (let i = 3; i < args.length; i ++) {
//           if (args[i].endsWith(".js")) {
//             sourcePath = args[i];
//           }
//         }
//       }
//       if (!sourcePath) {
//         console.log("Doesn't have a file to run. Please check if your source code is typed correctly or saved in the config.");
//       } else {
//         const buildDir = sourcePath.slice(0, sourcePath.length - 3) + "-build.js";
//         const compDir = sourcePath.slice(0, sourcePath.length - 3) + "-comp.js";
//         console.log(`Building the file at ${buildDir}`);
//         let libData = fs.readFileSync(__dirname + "/../src/lib.txt");
//         libData += "\n";
//         let sourceData = fs.readFileSync(sourcePath, {encoding:"utf-8"}).split('\n');
//         let unleaseAdd = false;
//         for (var sourceLine of sourceData) {
//           if (unleaseAdd) {
//             libData += sourceLine;
//             libData += "\n";
//           }
//           if (sourceLine.startsWith(warningString)) {
//             unleaseAdd = true;
//           }
//         }
//         libData += advertisement;
//         fs.writeFileSync(buildDir, libData);
//         // await executor(`minify ${buildDir} > ${compDir}`);
//         // executor(`minify ${buildDir} > ${compDir}`, () => {
//         //   fs.appendFileSync(compDir, advertisement, (err) => {
//         //     if (err) {
//         //       throw err;
//         //     }
//         //   });
//         // });
//         // setTimeout(() => {
//           // executor(`node ${sourcePath}`);
//         // }, 5000);
//       }
//     } else if (args[2] == "clean") {
//       console.log("Reseting config file at compe.config.json");
//       fs.writeFileSync(configPath, JSON.stringify({
//         username: process.env.USERNAME
//       }));
//     } else {
//       console.log("Unknown command");
//     }
//   } catch (err) {
//     console.log("Something went wrong :(");
//     console.log(err);
//   }
// }

executor("node main.js");