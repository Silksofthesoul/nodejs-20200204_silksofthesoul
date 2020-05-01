const path = require('path');
const {EOL} = require('os');
const {
  ReadStream,
  createWriteStream,
} = require('fs');

const filePath = path.resolve(__dirname, 'solution.txt');
console.log(filePath);
const wStream = createWriteStream(filePath, { encoding: 'utf8' });

const arr = ['James', 'Richard', 'John', 'Robert', 'James', 'Michael']
// const arr = 'crockodile,zalupa,sir'.split(',');

for (var i = 0; i < arr.length; i++) {
  let nline = '\n';
  // let nline = EOL+'\r\t\t';
  let chunk = i !== arr.length - 1 ? `${arr[i]}${nline}`:`${arr[i]}`;
  wStream.write(chunk);
}
