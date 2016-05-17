var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/items051516');

var weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

var itemSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    lastname: String,
    dayOfWeek: {type: String, enum: weekdays},
    numberOfDays: {type: Number, min: 1, max: 7}
});

module.exports = {
    Item: mongoose.model('Item', itemSchema)
};
