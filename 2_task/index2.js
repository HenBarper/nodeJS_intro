const fsPromises = require('fs').promises;
const { writeFile } = require('fs');
const path = require('path');

const fileOps = async() => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8');
        console.log(data);
        // await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'), data) // This would delete starter.txt after reading the data

        await fsPromises.writeFile(path.join(__dirname, 'files', 'promisesWrite.txt'), data)
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promisesWrite.txt'), '\n\nNice to meet you!')
        await fsPromises.rename(path.join(__dirname, 'files', 'promisesWrite.txt'), path.join(__dirname, 'files', 'promisesComplete.txt'))
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promisesComplete.txt'), 'utf-8');
        console.log(newData);
    } catch (err) {
        console.error(err);
    }
}

fileOps();

// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data); // output: Hello this is a starter text file.
// })