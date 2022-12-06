//  include modules
var http = require ('http'); // built-in module
var dt = require('./module1'); // user-defined module

// create server object using http module
http.createServer(function (req, res) {

    // defined response status and header
    res.writeHead(200, {'Content-Type': 'text/html'});

    // display some messages to window
    res.write("Hello Nodejs, present date and time is: " + dt.myDateTime());

    // end response
    res.end();

    // set listening port
}).listen(8080);