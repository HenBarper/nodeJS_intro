const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
// import uuid as v4 in above example
// vs
// const uuid = require('uuid');
// console.log(uuid.v4())

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));

console.log(uuid())

// Installs / CLI commands done
// npm install nodemon -g 
    // nodemon monitors your files and restarts the server as you save
    // -g stand for global

// npm init
    // creates the package.json
    // With the package.json the packages aren't sent to github making it more efficient

// npm i date-fns
    // stands for date functions

// npm install
    // will install all necessary dependencies from the package.json

// npm i nodemon --save-dev //these two are the same
// npm i nodemon -D // -D is short hand for the above
    // This will save nodemon as a dev dependency

// npm run dev
    // starts the project

// npm i uuid
    // Allows us to generate IDs

// npm update
    // npm will check for any allowable updates for your dependecy packages

// npm uninstall
// npm un
// npm remove
    // add flags, -g for global, -D for dev dependencies

