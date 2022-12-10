var fs = require('fs');

fs.appendFile('create2.txt', 'Hello, I was created my a nodejs script.', function (err) {
    if (err) throw err;
    console.log('File successfully created and saved!');
});