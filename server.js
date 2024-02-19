// How node differs from Vanilla JS
// 1) Node runs on a server - not in a browser (backend not frontend)
// 2) The console is the terminal window
console.log("Hello world!")

// 3) Global object instead of window object
//console.log(global)

// 4) Has common core modules that we will explore
// 5) CommonJS modules instead of ES6 modules
// 6) Missing some JS APIs like fetch

const os = require('os') // In common js use require statement rather than import
const path = require('path')

// You can import math like this and use dot notation
// const math = require('./math') // because this isn't a common core module we need the './'
// console.log(math.add(2, 3))

// Or destructure it like this
const { add, sub, mul, div } = require('./math')
console.log("2 + 3 = " + add(2,3))
console.log('9 - 3 = ' + sub(9,3))
console.log(mul(2,2))
console.log(div(9,3))

// console.log(os.type()) // output: Linux(in WSL) or Windows_NT(in bash)
// console.log(os.version()) // output: #1 SMP *datetime*
// console.log(os.homedir()) // output: *the home directory path*

// // Always have access to __dirname & __filename
// console.log(__dirname) // output: Web Development/nodeJS_intro
// console.log(__filename) // output: Web Development/nodeJS_intro/server.js

// console.log(path.dirname(__filename)) // output: Web Development/nodeJS_intro
// console.log(path.basename(__filename)) // output: server.js
// console.log(path.extname(__filename)) // output: .js
// console.log(path.parse(__filename))
// output:
// {
//     root: '/',
//     dir: '/Web Development/nodeJS_intro',
//     base: 'server.js',
//     ext: '.js',
//     name: 'server'
// }
