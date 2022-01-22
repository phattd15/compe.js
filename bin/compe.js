#! /usr/bin/env node
const { exec } = require("child_process");
const fs = require('fs');

function executor(script) {
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
  });
}

const args = process.argv;

if (args.length <= 2) {
  console.log("This is compe <3 Type 'compe help' for help");
  // TODO: Write help functions
}

if (args.length == 3 && args[2] == "help") {
  console.log("compe init <file-name>: Init a template file at file-name");
  console.log("minify <source-file> > <target-file>: Compress the file for submission limit");
}

if (args.length >= 3 && args[2] === "init") {
  const dirName = args[3];
  if (args.length === 3) {
    console.log("> compe init <file-name>: Init a template file at file-name");
  } else {
    console.log(`Creating a new template at ${args[3]}`);
    fs.writeFileSync(dirName, fs.readFileSync(__dirname + "/template.txt", {encoding: "utf-8"}));
  }
} else if (args.length == 3) {
  // console.log(extractor())
}

