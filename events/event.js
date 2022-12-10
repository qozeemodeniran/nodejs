var fs = require('fs');
var rs = fs.ReadStream("./demo.txt");

rs.on('open', function () {
    console.log("You opened demo.txt file!");
});