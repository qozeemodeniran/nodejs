var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    
    // parse url
    var qs = url.parse(req.url, true);
    
    // define filename
    var fn = "." + qs.pathname;

    // readfile
    fs.readFile(fn, function (err, data) {

        // return 404 if file not found, else return requested file
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Error: File not found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);