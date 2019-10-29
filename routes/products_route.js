var express = require('express');
var app = express.Router();
//var request = require('request');
var mongo = require('mongoose');
var mod = require('../models/products_model.js');

var model = mongo.model('products', mod.PostSchema, 'products');

app.post('/api/saveProducts', function (req, res) {
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

app.post('/api/updateProducts', function (req, res) {
    mod = new model(req.body);
    model.findByIdAndUpdate(req.body._id, {
        kode : req.body.nama,
        barcode : req.body.keterangan,
        nama : req.body.nama,
        kategori : req.body.kategori,
        subkategori : req.body.subkategori,
        cqty : req.body.cqty,
        harga_beli : req.body.harga_beli,
        harga1 : req.body.harga1,
        harga2 : req.body.harga2,
        harga3 : req.body.harga3,
        satuan : req.body.satuan,
        supplier : req.body.supplier,
        gambar : req.body.gambar
    },
        function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send({ data: 'data has been updated... !' });
            }
        })

})


app.post('/api/deleteProducts', function (req, res) {
    mod = new model(req.body);
    mod.remove({ _id: req.body.id }, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send({ data: 'data has been deleted' });
        }
    })

})



app.get('/api/getKategori', function (req, res) {
    model.find({}, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
})


module.exports = app;