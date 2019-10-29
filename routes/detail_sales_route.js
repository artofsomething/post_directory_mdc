var express = require('express');
var app = express.Router();
//var request = require('request');
var mongo = require('mongoose');
var mod = require('../models/detail_sales_model.js');

var model = mongo.model('detail_sales', mod.PostSchema, 'detail_sales');

app.post('/api/saveDetailSales', function (req, res) {
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

app.post('/api/updateDetailSales', function (req, res) {
    mod = new model(req.body);
    model.findByIdAndUpdate(req.body._id, {
        id_transaksi: req.body.uid,
        id_product : req.body.tanggal,
        barcode : req.body.barcode,
        nama_product : req.body.balance,
        qty : req.body.qty,
        harga : req.body.harga,
        diskon : req.body.diskon,
        total : req.body.total,
        expired_date : Date,
        status : {
            enum : req.body.status
        }
    },
        function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send({ data: 'detail sales has been updated... !' });
            }
        })

})


app.post('/api/deleteDetailSales', function (req, res) {
    mod = new model(req.body);
    mod.remove({ _id: req.body.id }, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send({ data: 'detail sales has been deleted' });
        }
    })

})



app.get('/api/getDetailPo', function (req, res) {
    model.find({}, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
})


module.exports = app;