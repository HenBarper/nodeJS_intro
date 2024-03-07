# Node.js
[Introductory node js tutorial](https://www.youtube.com/watch?v=JZXQ455OT3A&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw)

## Sections
<a name="Sections"></a>
1. [Intro to Node.js](#Intro_to_Node_js)
2. [Reading and Writing Files with Node.js](#Reading_and_Writing_files_with_Node_js)
3. [NPM Node Package Manager Modules](#NPM_Node_Package_Manager_Modules)
4. [Node Events](#Node_Events)
5. [How to Build a Web Server with Node.js](#How_to_Build_a_Web_Server_with_Node_js)
6. [Introduction to Express JS](#Introduction_to_Express_JS)
7. [What is Middleware in Express JS](#What_is_Middleware_in_Express_JS)

[Useful Commands](#Useful_Commands)

[Credits](#Credits)
__________________________________________________________________________________________________________________________________________
<a name="Intro_to_Node_js"></a>
## Task 1: Intro to Node.js - [video](https://www.youtube.com/watch?v=JZXQ455OT3A&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw)
- In this first video we learned some basics about Node js...
1. Node runs on a server - not in a browser (backend not frontend)
1. The console is the terminal window
1. Global object instead of window object
1. Has common core modules that we explored
    - os, path
1. CommonJS modules instead of ES6 modules
1. Missing some JS APIs like fetch
- How to import common core modules as well as our own functions
- How to run node
    - type 'node' in terminal
- How to run a file in node
    - type 'node filename'

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="Reading_and_Writing_Files_with_Node_js"></a>
## Task 2: Reading and Writing Files with Node.js - [video](https://www.youtube.com/watch?v=yQBw8skBdZU&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=2)
- How to read files
    - How to set encoding as a parameter
    - How to join the path using the common path module instead of hard coding the file path
- How to throw an uncaught error exception with process
- How to write to a file
- How to append to a file
- How to rename a file
- How to embed to control the order of operations
- How to delete a file
- How to work asyncronously with promises
- How to read and write large files with streams
- How to create and delete a directory/folder
- How to check if a file or directory exists

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="NPM_Node_Package_Manager_Modules"></a>
## Task 3: NPM Node Package Manager Modules - [video](https://www.youtube.com/watch?v=oGO_-DWTmKA&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=3)
- The difference between common core modules and NPM packages is that NPM packages are made by third parties
- CLI: Command line interface
- In the terminal we can install node packages globally using
    - npm i package-name
    - npm install package-name
    - npm add package-name
- How to install npm packages locally and globally
    - '-g' for global
    - npm init
- How to create a package.json file
- After NPM is initialized with a package.json, added packages get automatically added as dependencies to the package.json
- We add the node_modules folders to a .gitignore because that folder can get really big with dependencies and linked dependencies
- How to save dev dependencies
- The karat in front of a dependency version: "uuid": "^9.0.1" means not to update past that version, in this example ^major.minor.patch you can update the minor version and patch but not the major version
- You can use 'npm i package@version-number' to install a specific version of a package
- How to uninstall dependencies

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="Node_Events"></a>
## Task 4: Node Events - [video](https://www.youtube.com/watch?v=2vaTy4dkbJM&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=4)
- Using the events modules
- Using and extending the EventEmitter class
- How to register and event listener
- How to emit events
- How to log events in a log folder
- How to create a timeout function

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="How_to_Build_a_Web_Server_with_Node_js"></a>
## Task 5: How to Build a Web Server with Node js - [video](https://www.youtube.com/watch?v=3ZAKY-CDKog&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=5)
- How to define a port
- How to create a minimal server
- How to listen to a port
- How to create an http request
- How to use a chained ternary statement
- How to redirect
- How to log errors and messages

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="Introduction_to_Express_JS"></a>
## Task 6: Introduction to Express JS - [video](https://www.youtube.com/watch?v=jivyItmsu18&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=6)
- How to create a basic express server
- How to send a message to the server
- How to send a file to the server
- How to copy paste a highlighted section below the highlighted section `shift + alt + down arrow`
- Routes are checked in downwards order through the code
- We can update our app.get to look for no endpoint or a specific endpoint
```
app.get('^/$|/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
```
- In the endpoint section the '^/$' indicates that the endpoint must begin and end with '/'
- Then we have the 'or' operator followed by '/index.html'
- This allows us to get the index.html either with or without the index.html endpoint
- `app.get('^/$|/index(.html)?', (req, res) => {})`
    - If we put the '.html' in parenthesis, followed by '?' it makes the extension optional
- How to redirect from one page to another
- How to send specific status codes
- How to create route handlers
- How to chain route handlers

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="What_is_Middleware_in_Express_JS"></a>
## Task 7: What is Middleware in Express JS - [video](https://www.youtube.com/watch?v=y18ubz7gOsQ&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=7)
- 

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="Useful_Commands"></a>
## Useful Commands

**IMPORTS & EXPORTS**
- `module.exports = { file_or_function_name, file_or_function_name }`
    - Makes a file or function available for import
- `const var_name = require('file_name')`
    - Creates a variable that allows you to use functions from an imported file
- `exports.function_name = (parameters) => functionality` example: `exports.add = (a, b) => a + b;`
    - Allows importing and calling of functions directly
        - `const { add, sub, mul, div } = require('./math');`
        - `console.log("2 + 3 = " + add(2,3));`

**NODE**
- `node filename`
    - Runs a file with Node
- `node start`
    - Runs the start script from package.json
- `node run dev`
    - Runs the dev script from package.json

**INSTALLS**
- `npm install module_name -g`
    - Installs the module globally
- `npm init`
    - Creates the package.json
- `npm install module_name`
    - Installs the module and sets it as a dependency in the package.json
- `npm i module_name`
    - Same as npm install
- `npm i module_name --save-dev`
- `npm i module_name -D`
    - Installs the module as a dev dependency
- `npm update`
    - Looks for and updates and dependencies in the package.json
- `npm uninstall module_name`
    - Uninstalls the module
- `npm un module_name`
- `npm remove module_name`
    - Same as npm uninstall

**MODULES**
#### fs - file system
- `fs.existsSync(file_name or directory_name)`
    - Checks whether a file or folder exists
- `fs.mkdir(directory_name)`
    - Creates a directory
- `fs.rmdir(directory_name)`
    - Deletes a directory
- `fs.readFile(file_path, optional_encoding, (err, data) => {})`
    - Reads a file
- `fs.writeFile(file_path, data_to_write, (err) => {})`
    - Write to a file
- `fs.appendFile(file_path, data_to_append, (err) => {})`
    - Append to a file
- `fs.rename(original_file_path, new_file_path, (err) => {})`
    - Rename a file
- `fs.createReadStream(file_path, { encoding: 'utf8' });`
    - Creates a stream to read large files in chunks
- `fs.createWriteStream(file_path);`
    - Creates a stream to write large files in chunks

#### fs.promises
- `await fs.promises.readFile(file_path, optionalEncoding)`
    - Reads a file
- `await fs.promises.writeFile(file_path, dataToWrite)`
    - Write to a file
- `await fs.promises.appendFile(file_path, dataToAppend)`
    - Append to a file
- `await fs.promises.rename(originalFilePath, newFilePath)`
    - Rename a file

#### path
- `path.join(__dirname, directory_name, file_name)`
    - Creates a file path
- `path.extname(req.url);`
    - Get extension from url
- `path.parse(filePath)`
    - Parses the file path into separate elements

#### date-fns
- `const { format } = require('date-fns');`
- `format(new Date(), 'yyyyMMdd\tHH:mm:ss')`
    - Creates a new date time object

#### uuid
- `const { v4: uuid } = require('uuid');`
- `uuid()`
    - Creates a unique id

#### events
- `const EventEmitter = require('events');`
- `class MyEmitter extends EventEmitter {};`
- `const myEmitter = new MyEmitter();`
- `myEmitter.on('log', (msg) => logEvents(msg));`

#### http
- `http.createServer((req, res) => {})`
    - Creates a basic http server

#### express
- Create a basic express server with just a few lines
```
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})
```
- `res.send('Message');`
    - Sends a message to the server to display
- `res.sendFile(path.join(__dirname, 'views', 'index.html'));`
- `res.sendFile('/path/index.html', { root: __dirname });`
    - Both ways to send a file to the server to display
```
app.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/new-page.html'); //302 by default
});
```
    - Allows us to redirect from one page to another
        - We can include the option status code to override the default
```
app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})
```
- In the above example we're sending a 404 status and directing towards our 404 page when any undefined endpoint is attempted to be accessed.
    - The '/*' says to look for any other endpoint
    - By including status(404) in between res and sendFile() we define the status code that is sent
- Route Handlers
```
app.get('/hello(.html)?', (req, res, next) => {
    console.log("Attempted to load hello.html");
    next();
}, (req, res) => {
    res.send('Hello World!');
})
```
- By passing in 'next' we can allow for a backup function
- Route Handlers can also be chained
```
const one = (req, res, next) => {
    console.log('one');
    next();
}
const two = (req, res, next) => {
    console.log('two');
    next();
}
const three = (req, res) => {
    console.log('three');
    res.send('finished');
}
app.get('/chain(.html)?', [one, two. three]);
```

[Back to top](#Sections)
__________________________________________________________________________________________________________________________________________
<a name="Credits"></a>
### Contributor: Ben Harper
Website: [BenHarperWebDev](https://henbarper.github.io/benharperwebdev/)

[Back to top](#Sections)
