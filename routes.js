var http = require('http');
var fs = require('fs');
const { fetch, RedirectHandler } = require('undici');

var server = http.createServer(function(req, res){
    console.log("Request was made: " + req.url);
    if (req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/contact'){
        res.writeHead(200, {'content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if(req.url === '/api/fran'){
        var fran = [{name: 'francis', passion: 'music'}, {name: 'Sus', passion: 'design'}];
        res.writeHead(200, {'content-Type': 'application/json'})
        res.end(JSON.stringify(fran));
    } else{
        res.writeHead(404, {'content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
    // res.writeHead(200, {'content-type': 'text/plain'});
    // res.end("Node JS is fun");

});

server.listen(3000, '127.0.0.1');
console.log('server now listening to port 3000');