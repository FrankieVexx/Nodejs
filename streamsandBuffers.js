// buffer is a chunk of data that is being transferred from one place to another.
// writeable streams are used to write data to a stream.
// readable streams are used to read data from a stream.
// duplex streams are used to read and write data to a stream.

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/test.txt', 'utf8');


myReadStream.on('data', function(chunk){
    console.log('new chunk received:');

    myWriteStream.write(chunk);
});

// writeable stream
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
