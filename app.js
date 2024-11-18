// NPM - Node Package Manager (reusing pre-built codes)
// npmjs.com
// npm - global command, comes with node
// npm --version

// local dependency - use it in any project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)'
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip) 
// npm init -y (everything default)

// always mention mode_modules folder in file .gitignore before pushing code in GitHub
// and if we clone that repo we only need to run code 'npm install' which will download
// all modules of dependencies in file package.json
 

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items)  // lodash module property use
console.log(newItems);
console.log('Hello People')