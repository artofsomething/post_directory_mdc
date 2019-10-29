var express = require('express');
var app = express.Router();
//var request = require('request');
var mongo = require('mongoose');
var mod = require('../models/supplier.js');

var model = mongo.model('supplier', mod.PostSchema, 'supplier');

app.post('/api/saveSupplier', function (req, res) {
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

app.post('/api/updateSupplier', function (req, res) {
    mod = new model(req.body);
    model.findByIdAndUpdate(req.body._id, {
        nama : req.body.nama,
        no_telp : req.body.no_telp,
        website : req.body.website,
        email : req.body.email,
        cp : req.body.cp,
        cp_phone : req.body.cp_phone,
        alamat : req.body.alamat
    },
        function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send({ data: 'data has been updated... !' });
            }
        })

})


app.post('/api/deleteSupplier', function (req, res) {
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