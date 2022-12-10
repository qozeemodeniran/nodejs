var fs = require('fs');

fs.rename('delete.txt', 'delete.html', function (err) {
    if (err) throw err;
    console.log('File delete.txt was renamed to delete.html');
});