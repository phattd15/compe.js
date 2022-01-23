#! /usr/bin/env node
const { exec } = require("child_process");
const fs = require('fs');

function executor(script, cb, cbargs) {
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
    if (cb) cb(cbargs);
  });
}

const args = process.argv;
const warningString = "// DO NOT EDIT ABOVE THIS LINE - compe.js //\r";

if (args.length <= 2) {
  console.log("This is compe <3 Type 'compe help' for help");
}

else if (args.length == 3 && args[2] == "help") {
  console.log("$ compe help: Help");
  console.log("$ compe run <file-name>: Run the file");
  console.log("$ compe init <file-name> <input-name>: Init a template file at file-name with input at <input-name> (default is input.txt if ignored)");
  console.log("$ compe build <file-name>: Build the file to submit");
  console.log("$ compe bc <file-name>: Build the file and compress to reduce size for submission");
}

else if (args.length >= 3 && args.length <= 5 && args[2] === "init") {
  const dirName = args[3];
  if (args.length === 3) {
    console.log("> compe init <file-name>: Init a template file at file-name");
  } else if (args.length >= 4) {
    const inputName = args.length == 5 ? args[4] : "input.txt";
    if (!args[3].endsWith(".js")) {
      console.log("File should be in .js extension");
    } else if (!inputName.endsWith(".txt")) {
      console.log("Input file should be in .txt extension");
    } else {
      console.log(`Creating a new template at ${args[3]} with input at ${inputName}`);
      const templateData = fs.readFileSync(__dirname + "/../src/template.txt", {encoding: "utf-8"});
      fs.writeFileSync(dirName, templateData.replace("input.txt", inputName));
      fs.writeFileSync(inputName, "");
    }
  }
} 

else if (args.length == 4 && args[2] == "build") {
  let fileName = args[3];
  if (!fileName.endsWith(".js")) {
    console.log("Please make sure you are building the right file");
  } else {
    try {
      let buildFileName = fileName.slice(0, fileName.length - 3) + "_build.js";
      let templateData = fs.readFileSync(__dirname + "/../src/lib.txt", {encoding: 'utf-8'});
      let fileData = fs.readFileSync(fileName, {encoding: 'utf-8'});
      let lines = fileData.split("\n");
      let unlease = false;
      for (var x of lines) {
        if (unlease) {
          templateData += x;
          templateData += "\n";
        }
        if (x == warningString) {
          unlease = true;
        }
      }
      templateData += "// Generated with compe.js - https://github.com/polarity-cf/compe.js";
      fs.writeFileSync(buildFileName, templateData);
    } catch(err) {
      console.log(err);
    }
  }
}

else if (args.length == 4 && args[2] == "bc") {
  let fileName = args[3];
  if (!fileName.endsWith(".js")) {
    console.log("Please make sure you are building the right file");
  } else {
    try {
      let buildFileName = fileName.slice(0, fileName.length - 3) + "_build.js";
      let buildCompressFileName = fileName.slice(0, fileName.length - 3) + "_buildcomp.js";
      let templateData = fs.readFileSync(__dirname + "/../src/lib.txt", {encoding: 'utf-8'});
      let fileData = fs.readFileSync(fileName, {encoding: 'utf-8'});
      let lines = fileData.split("\n");
      let unlease = false;
      for (var x of lines) {
        if (unlease) {
          templateData += x;
          templateData += "\n";
        }
        if (x == warningString) {
          unlease = true;
        }
      }
      templateData += "// Generated with compe.js - https://github.com/polarity-cf/compe.js";
      fs.writeFileSync(buildFileName, templateData);
      var appendDataBack = (bcfn) => {
        var reData = fs.readFileSync(bcfn, {encoding: 'utf-8'});
        reData += "\n // Generated with compe.js - https://github.com/polarity-cf/compe.js";
        fs.writeFileSync(bcfn, reData);
      };
      executor("minify " + buildFileName + " > " + buildCompressFileName, appendDataBack, buildCompressFileName);
    } catch(err) {
      console.log(err);
    }
  }
}

else if (args.length == 4 && args[2] == "run") {
  let fileName = args[3];
  if (!fileName.endsWith(".js")) {
    console.log("Please make sure you are building the right file");
  } else {
    executor("node " + fileName);
  }
}

else {
  console.log("Wrong command. Please visit 'compe help'");
}