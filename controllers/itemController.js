var mongoose = require('mongoose');
var Item = mongoose.model('Item');


exports.home = function(req, res) {
    res.render('home', {pageTitle: 'Home Page'});
};

exports.create = function(req, res) {
    res.render('single-item', {pageTitle: 'Create New Item'});
};

exports.doCreate = function(req, res) {
    var item = new Item({
      name: req.body.name,
      lastname: req.body.lastname,
      numberOfDays: req.body.numberOfDays,
      dayOfWeek: req.body.dayOfWeek
    });

    item.save(function(error, result) {
        if(!error) {
            res.redirect('/');
        } else {
            console.log('the item was not created.');
            res.redirect('/');
        }
    });
};

exports.displayAll = function(req, res) {
    Item.find(function(error, result) {
        res.render('display-all', {pageTitle: 'All Items', items: result});
    });
};

exports.displayOne = function(req, res) {
    Item.findById(req.params.id, function(error, result) {
        res.render('display-one', {pageTitle: 'Item Page', item: result});
    })
};

exports.edit = function(req, res) {
  Item.findById(req.params.id, function(error, result) {
      res.render('edit-item', {pageTitle: 'Edit Item', item: result});
  })
};

exports.doEdit = function(req, res) {
    Item.findById(req.params.id, function(error, result) {

        result.name = req.body.name;
        result.lastname = req.body.lastname;
        result.numberOfDays = req.body.numberOfDays;
        result.dayOfWeek = req.body.dayOfWeek;

        result.save(function(error, editado) {
            res.render('display-one', {pageTitle: 'Edit Item', item: result});
        });
    })
};

exports.delete = function(req, res) {
    Item.findById(req.params.id, function(error, result) {
        res.render('delete-item', {pageTitle: 'Delete Item', item: result});
    })
};

exports.doDelete = function(req, res) {
    Item.findById(req.params.id, function(error, result) {
        result.remove(function(error, removed) {
            res.redirect('/');
        });
    })
};



exports.pageNotFound = function(req, res) {
    res.status(404).send('this is the 404 page not found');
};