var express = require('express');
var app = express.Router();
//var request = require('request');
var mongo = require('mongoose');
var mod = require('../models/kategori_model.js');

var model = mongo.model('kategori', mod.PostSchema, 'kateogri');

app.post('/api/saveKategori', function (req, res) {
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

app.post('/api/updateKategori', function (req, res) {
    mod = new model(req.body);
    model.findByIdAndUpdate(req.body._id, {
        nama : req.body.nama,
        keterangan : req.body.keterangan,
        parents : req.body.parents
    },
        function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send({ data: 'kategori opname has been updated... !' });
            }
        })

})


app.post('/api/deleteKategori', function (req, res) {
    mod = new model(req.body);
    mod.remove({ _id: req.body.id }, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send({ data: 'Kategori opname has been deleted' });
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