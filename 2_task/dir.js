const fs = require('fs');

// Use fs.existsSync to check on the existence of a file or directory before acting on it
if(!fs.existsSync('./new')) {
    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory created')
    })
}

if(fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory removed')
    })
}
