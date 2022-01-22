#! /usr/bin/env node
const { exec } = require("child_process");

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
  console.log("This is compe <3");
  // TODO: Write help functions
}

if (args.length >= 3 && args[2] === "init") {
  const dirName = args[3];
  console.log(args)
  if (args.length === 3) {
    console.log("> compe init <file-name>: Init a file at file-name");
  } else {
    console.log(`Creating a magic at ${args[3]}`);
  }
} else if (args.length == 3) {
  
}
