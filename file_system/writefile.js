var fs = require('fs');

fs.writeFile('writefile.txt', 'Hello, I was created by nodejs writeFile method!', function (err) {
    if (err) throw err;
    console.log('New file created and saved!');
});