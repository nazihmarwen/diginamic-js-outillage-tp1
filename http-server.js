var http = require('http');
var hostname = '127.0.0.1';
var port = 3000;
const server = http.createServer(function (req, res) {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('<h1>Hello Marwen!</h1>');
});
server.listen(port, hostname, function() {
console.log("Server running at http://" + hostname + ":" + port + "/");
});