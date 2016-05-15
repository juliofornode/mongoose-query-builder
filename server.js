//1. Dependencies
var express = require('express');
var path = require('path');
var logger = require('morgan');

//2. DB settings


//3. App instantiation
var app = express();


//4. App configuration (app.set)
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);
var port = app.get('port');


//5. Middleware definition (app.use)
app.use(express.static('/public'));
app.use(logger('dev'));


//6. Routes
app.get('/', function(req, res) {
    res.send('this is the home page');
});

app.all('*', function(req, res) {
    res.status(404).send('this is the 404 page not found');
});


//7. Start app server with host and port
app.listen(port, function() {
    console.log('server running on ' + port);
});