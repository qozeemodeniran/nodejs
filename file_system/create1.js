var fs = require('fs');

fs.appendFile('create1.html', '<h1>Node JS</h1><p>I was created by nodejs script</p>', function (err) {
    if (err) throw err;
    console.log('File created successfully, and saved!');
});