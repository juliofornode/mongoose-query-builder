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
      name: req.body.name
    });
    item.save(function(error, result) {
        console.log(result + ' has been saved');
        res.redirect('/');
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
      console.log('item to edit: ' + result.name);
      res.render('edit-item', {pageTitle: 'Edit Item', item: result});
  })
};

exports.doEdit = function(req, res) {
    Item.findById(req.params.id, function(error, result) {
        result.name = req.body.name;
        result.save(function(error, editado) {
            console.log('item edited: ' + editado.name);
            res.render('display-one', {pageTitle: 'Edit Item', item: editado});
        });
    })
};

exports.delete = function(req, res) {
    Item.findById(req.params.id, function(error, result) {
        console.log('item to delete: ' + result.name);
        res.render('delete-item', {pageTitle: 'Delete Item', item: result});
    })
};

exports.doDelete = function(req, res) {
    Item.findById(req.params.id, function(error, result) {
        result.name = req.body.name;
        result.remove(function(error, removed) {
            console.log('item removed: ' + removed.name);
            res.redirect('/');
        });
    })
};



exports.pageNotFound = function(req, res) {
    res.status(404).send('this is the 404 page not found');
};