//1. Dependencies
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

//custom modules

//3. App instantiation
var app = express();

//2. DB settings
var db = require('./model/items');



//4. App configuration (app.set)
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);
var port = app.get('port');


//5. Middleware definition (app.use)
app.use(express.static('/public'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));


//6. Routes
var controller = require('./controllers/itemController');
var routes = require('./routes/itemRoutes')(app);


//7. Start app server with host and port
app.listen(port, function() {
    console.log('server running on ' + port);
});