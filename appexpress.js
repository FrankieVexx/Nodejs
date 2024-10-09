var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res) {
    res.sendFile(__dirname + '/contact.html');
});


app.get('/profile/:id', function(req, res) {
    var data = {age: 29, job: 'Developer', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.id, data : data});
    // res.send('You requested to see a profile with the id of ' + req.params.id);
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});

