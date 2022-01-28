const fs = require('fs');
const { exec } = require('child_process');

let data = fs.readFileSync(__dirname + '/../dist/compe.cjs.development.js', {
  encoding: 'utf-8',
});
var lines = data.split('\n');
let firstExportIndex = lines.length - 3;
const setString = '})(exports.TreeSet || (exports.TreeSet = {}));';
for (let i = lines.length - 3; i >= 0; i--) {
  if (lines[i].startsWith('exports')) {
    firstExportIndex = i;
  } else {
    break;
  }
}
for (let i = firstExportIndex - 1; i >= 0; i--) {
  if (lines[i].startsWith(setString)) {
    lines[i] = '})(TreeSet || (TreeSet = {}));';
    break;
  }
}
data = lines.slice(4, firstExportIndex).join('\n');
data = data.replace('exports.', 'const ');
try {
  fs.writeFileSync(__dirname + '/libpre.js', data);
} catch (err) {
  console.log(err);
}

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

executor('npx minify ' + __dirname + '/libpre.js > ' + __dirname + '/lib.txt');