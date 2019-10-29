var express = require('express');
var app = express.Router();
//var request = require('request');
var mongo = require('mongoose');
var mod = require('../models/detail_stock_opname_model.js');

var model = mongo.model('detail_stock_opname', mod.PostSchema, 'detail_stock_opname');

app.post('/api/saveDetailStockOpname', function (req, res) {
    mod = new model(req.body);
    mod.save(function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send({ data: "record has been inserted" });
            //console.log(mod);
        }
    })

})

/*
name : String,
  address : String,
  baseTown : String,
  email : String,
  whatsapp :String,
  tempatLahir : String,
  tanggalLahir : Date,
  gender : String,
  tanggalJoin : Date,

  
  username : String,
  password : String,
  userBadge : String,
  userBackground : String,
  userRatings : Number,
  status : String,


  isDeleted : Boolean,
  lastUpdatedOn : Date,
  lastUpdatedBy : String,
  */

app.post('/api/updateDetailStockOpname', function (req, res) {
    mod = new model(req.body);
    model.findByIdAndUpdate(req.body._id, {
        id_stock_opname: req.body.id_stock,
        id_product : req.body.id_product,
        system : req.body.system,
        actual : req.body.actual,
        difference : req.body.difference
    },
        function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send({ data: 'detail stock opname has been updated... !' });
            }
        })

})


app.post('/api/deleteDetailStockOpname', function (req, res) {
    mod = new model(req.body);
    mod.remove({ _id: req.body.id }, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send({ data: 'detail stock opname has been deleted' });
        }
    })

})



app.get('/api/getDetailStockOpname', function (req, res) {
    model.find({}, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
})


module.exports = app;