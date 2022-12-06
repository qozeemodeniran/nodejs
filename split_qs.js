var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'txt/html'});

    // define qeury string
    var qs = url.parse(req.url, true).query;

    // do the spliting
    var qs_text = qs.firstname + " " + qs.lastname;

    // output the splitted query string
    res.end(qs_text);

}).listen(8080);