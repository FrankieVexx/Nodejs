// Create dir sychronously

var fs = require('fs');

// fs.mkdirSync('Test');

// Create dir asychronously

fs.mkdir('Test', function(err){
    fs.readFile('read.txt', 'utf8', function(err, data){
        fs.writeFile('Test/write.txt', data, function(err, data){
            console.log('Data written to file');
        });
    if(err) throw err;
    console.log('Directory created');
});

