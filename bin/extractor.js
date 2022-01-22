const fs = require('fs');

let data = fs.readFileSync(__dirname + "/../dist/compe.cjs.development.js", {encoding: 'utf-8'});
var lines = data.split('\n');
let firstExportIndex = 0;
for (var i = 0; i < lines.length; i ++) {
  if (lines[i].startsWith('exports')) {
    firstExportIndex = i;
    break;
  }
}
data = lines.slice(4, firstExportIndex).join('\n');
try {
  fs.writeFileSync(__dirname + "/wholelib.txt", data);
} catch (err) {
  console.log(err);
}
