// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
// Note - every file in node is a module

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavours')
require('./7-mind-grenade') //here we have used require('./ ...') operation 
//                            as function invoking on module 7-module-grenade.js 
//                            and it will give an output same as function call.(IMPORTANT)

// sayHi('parth')
// sayHi(names.john)
// sayHi(names.peter)
