var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/items051516');

var itemSchema = new mongoose.Schema({
    name: String
});

module.exports = {
    Item: mongoose.model('Item', itemSchema)
};
