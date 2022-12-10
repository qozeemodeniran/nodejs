var fs = require('fs');

fs.writeFile('create2.txt', 'I was replaced by nodejs script. This is not the original me!!!', function (err) {
    if (err) throw err;
    console.log('File create2.txt was successfully updated!');
})