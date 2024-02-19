const fs = require('fs'); // common js import
const path = require('path');

// callback function
// fs.readFile('./files/starter.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data); // output: <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 61 20 73 74 61 72 74 65 72 20 74 65 78 74 20 66 69 6c 65 2e>
//     console.log(data.toString()); // output: Hello this is a starter text file.
// })

// You can specify the encoding as a parameter instead of using toString()
// fs.readFile('./files/starter.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data); // output: Hello this is a starter text file.
// })

// Hardcoding file paths is not ideal, there can be issues on different operating systems
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data); // output: Hello this is a starter text file.
})

console.log("Hello...") // This prints first because the readFile is processing asyncronously

// We can remove the encoding below because it is now default(IDK if because we specified it above or if it's default in writeFile)
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'This is the reply to the starter file.', (err) => { // No data necessary because we're writing not reading
//     if (err) throw err;
//     console.log('Write complete');
// })

// fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'Testing append 5\n', (err) => {
//     if (err) throw err;
//     console.log('Append complete');
// })

// You can also embed the append within the write to make absolutely certain the file is created first before attempting to append
// This also controls the order of operations since these actions are taking place asyncronously
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'It\'s nice to meet you!', (err) => {
    if (err) throw err;
    console.log('Write complete');

    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nNo it is not.', (err) => {
        if (err) throw err;
        console.log('Append complete');

        fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
            if (err) throw err;
            console.log('rename complete');
        })
    })
})

//exit on uncaught errors
process.on('uncaughtException', err => { // process is available to us from node without being imported
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})