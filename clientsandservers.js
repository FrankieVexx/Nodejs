
// Response headers are sent to the client by the server to provide additional information about the server's response.
// The response headers are sent before the response body. The response headers are separated from the response body by a blank line. they can contain information such as the content type of the response body, the length of the response body, and the server that generated the response.  The response headers are sent using the response.writeHead() method.
// as content type and status
// The response headers are sent using the response.writeHead() method.
var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res){
    console.log('Request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/test.txt', 'utf8');
    myReadStream.pipe(res);
    // res.end('I am happy\n');
});

server.listen(3000, '127.0.0.1');

console.log('Server is running on port 3000');  