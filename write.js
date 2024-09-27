// Write file using fs module synchrnously

var fs = require('fs');

var readMe = fs.readFileSync('read.txt','utf8',);

fs.writeFileSync('write.txt', readMe);

// Write file using fs module asynchrnously

fs.readFile('read.txt', 'utf8', function(err, data){
    fs.writeFile('write.txt', data, function(err, data){
        console.log('Data written to file');
    });
});