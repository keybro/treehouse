var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    setInterval(function () {
        response.write(new Date() + "\n")
    }, 1000);
    //response.end('Hello World\n');
}).listen(3000);
console.log('Server running at http://localhost:3000');
