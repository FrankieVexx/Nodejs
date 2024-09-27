// read file with fs module synchrnously
var fs = require('fs');

var readMe = fs.readFileSync('read.txt','utf8',);

console.log(readMe);

// read file with fs module asynchrnously

fs.readFile('read.txt', 'utf8', function(err, data){
    console.log(data);
});
