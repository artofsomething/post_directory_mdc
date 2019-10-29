var express = require('express');
var app = express.Router();
//var request = require('request');
var mongo = require('mongoose');
var mod = require('../models/temp_stock_report_model.js');

var model = mongo.model('temp_stock_report', mod.PostSchema, 'temp_stock_report');

app.post('/api/saveTempReport', function (req, res) {
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

app.post('/api/updateTempReport', function (req, res) {
    mod = new model(req.body);
    model.findByIdAndUpdate(req.body._id, {
        products : req.body.products,
        barcode : req.body.barcode,
        category : req.body.category,
        purchase_price : req.body.pruchase_price,
        current_qty : req.body.current_qty,
        qty_in : req.body.qty_in,
        qty_out : req.body.qty_out,
        qty_refund : req.body.qty_refund,
        qty_broken : req.body.qty_broken,
        total_purchase : req.body.total_purchase,
        total_sales : req.body.total_sales,
        total_refund : req.body.total_refund,
        total_disc : req.body.total_disc
    },
        function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send({ data: 'Data has been updated... !' });
            }
        })

})


app.post('/api/deleteTempReport', function (req, res) {
    mod = new model(req.body);
    mod.remove({ _id: req.body.id }, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send({ data: 'Data has been deleted' });
        }
    })

})



app.get('/api/getTempReport', function (req, res) {
    model.find({}, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
})


module.exports = app;