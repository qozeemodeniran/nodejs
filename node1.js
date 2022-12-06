// include http: built-in module
var http = require('http');

// create server
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end();
}).listen(8080);