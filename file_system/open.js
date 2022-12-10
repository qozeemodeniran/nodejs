var fs = require('fs');

fs.open('open.txt', 'w', function (err) {
    if (err) throw err;
    console.log('New file created!');
})