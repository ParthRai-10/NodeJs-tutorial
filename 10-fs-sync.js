// File System Module (Sync) (built-in Modules)
const {readFileSync, writeFileSync} = require('fs')
console.log('start');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

writeFileSync(
  './content/result-sync.txt', // path for the file
  `Here is the result : ${first}, ${second}`,  // content to write in file we created
  {flag: 'a'}                 // append flag allows to append file
)

console.log('done with this task');
console.log('starting the next one');