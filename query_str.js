var http = require('http')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})

    // display the query url
    res.write(req.url)

    res.end()
}).listen(8080)