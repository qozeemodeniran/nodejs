var fs = require('fs');

fs.appendFile('read1.html', '<p>I love to write computer programs.</p>.', function (err) {
    if (err) throw err;
    console.log('The file read1.html was updated successfully.');
});