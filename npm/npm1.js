var http = require('http');
var upc = require('upper-case');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(upc.upperCase("i was changed to upper-case"));
    res.end();
}).listen(8080);