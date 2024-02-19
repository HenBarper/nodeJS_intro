// Sometimes it's better not to grab all the data at once if we have large files
const fs = require('fs')
const rs = fs.createReadStream('./files/lorem.txt', { encoding: 'utf8' });

const ws = fs.createWriteStream('./files/new_lorem.txt');

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk)
// })

// Instead of using the listener you can use the pipe which is more efficient
rs.pipe(ws);