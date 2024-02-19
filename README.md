# nodeJS_intro
Introductory node js tutorial: https://www.youtube.com/watch?v=JZXQ455OT3A&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw

## Sections
1. [Intro to Node.js](#Intro_to_Node_js)
2. [Reading and Writing Files with Node.js](#Reading_and_Writing_files_with_Node_js)
3. [NPM Node Package Manager Modules](#NPM_Node_Package_Manager_Modules)
__________________________________________________________________________________________________________________________________________
<a name="Intro_to_Node_js"></a>
## Task 1: Intro to Node.js
- In this first video we learned some basics about Node js...
    1. Node runs on a server - not in a browser (backend not frontend)
    2. The console is the terminal window
    3. Global object instead of window object
    4. Has common core modules that we explored
        - os, path
    5. CommonJS modules instead of ES6 modules
    6. Missing some JS APIs like fetch
- How to import common core modules as well as our own functions
- How to run node
    - type 'node' in terminal
- How to run a file in node
    - type 'node <filename>'

__________________________________________________________________________________________________________________________________________
<a name="Reading_and_Writing_Files_with_Node_js"></a>
## Task 2: Reading and Writing Files with Node.js
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

__________________________________________________________________________________________________________________________________________
<a name="NPM_Node_Package_Manager_Modules"></a>
## Task 3: NPM Node Package Manager Modules
- The difference between common core modules and NPM packages is that NPM packages are made by third parties
- CLI: Command line interface
- In the terminal we can install node packages globally using
    - npm i <package-name>
    - npm install <package-name>
    - npm add <package-name>
- How to install npm packages locally and globally
    - '-g' for global
    - npm init
- How to create a package.json file
- After NPM is initialized with a package.json, added packages get automatically added as dependencies to the package.json
- We add the node_modules folders to a .gitignore because that folder can get really big with dependencies and linked dependencies
- How to save dev dependencies
- The karat in front of a dependency version: "uuid": "^9.0.1" means not to update past that version, in this example ^major.minor.patch you can update the minor version and patch but not the major version
- You can use 'npm i <package>@<version number>' to install a specific version of a package
- How to uninstall dependencies
