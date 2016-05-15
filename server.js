//1. Dependencies
var express = require('express');
var path = require('path');
var logger = require('morgan');

//2. DB settings
var mongoose = require('mongoose');
var db = require('./model/items');
var Item = mongoose.model('Item');


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

    var julio = new Item({
        name: 'Julio'
    });
    julio.save();

    Item.find(function(error, result) {

        console.log(JSON.stringify(result));
        res.send('this is the home page, ok?');
    });
});

app.all('*', function(req, res) {
    res.status(404).send('this is the 404 page not found');
});


//7. Start app server with host and port
app.listen(port, function() {
    console.log('server running on ' + port);
});