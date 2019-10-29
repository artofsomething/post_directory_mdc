var express = require('express');
var app = express.Router();
//var request = require('request');
var mongo = require('mongoose');
var mod = require('../models/temp_most_sales_item_model.js');

var model = mongo.model('temp_most_sales_item', mod.PostSchema, 'temp_most_sales_item');

app.post('/api/saveTempSalesItem', function (req, res) {
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

app.post('/api/updateTempSalesItem', function (req, res) {
    mod = new model(req.body);
    model.findByIdAndUpdate(req.body._id, {
        id_product : req.body.id_product,
        qty : req.body.qty,
        tanggal : req.body.tanggal
    },
        function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send({ data: 'Data has been updated... !' });
            }
        })

})


app.post('/api/deleteTempSalesItem', function (req, res) {
    mod = new model(req.body);
    mod.remove({ _id: req.body.id }, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send({ data: 'Data has been deleted' });
        }
    })

})



app.get('/api/getTempSalesItem', function (req, res) {
    model.find({}, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
})


module.exports = app;