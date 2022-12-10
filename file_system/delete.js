var fs = require('fs');

fs.unlink('delete.txt', function (err) {
    if (err) throw err;
    console.log('File delete.txt was successfully deleted.');
});