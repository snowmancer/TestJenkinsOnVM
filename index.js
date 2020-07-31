var express = require('express');
var http = require('http');
const app = express();
var server = http.createServer(app);

app.get('/', function(req, res){
    res.send('I truly LOVE JE, TH and DE very much!!!');
});

app.get('/start', function(req, res){
    res.send('start page!');
});

server.listen(3000, '127.0.0.1', function(){
    console.log('Server listen on port!'+ server.address().port);
});
