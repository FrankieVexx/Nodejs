var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/test.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.pipe(myWriteStream);