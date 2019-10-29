var express = require('express');
var app = express.Router();
//var request = require('request');
var mongo = require('mongoose');
var mod = require('../models/detail_utpt_model.js');

var model = mongo.model('detail_utpt', mod.PostSchema, 'detail_utpt');

app.post('/api/saveDetailUtpt', function (req, res) {
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

app.post('/api/updateDetailUtpt', function (req, res) {
    mod = new model(req.body);
    model.findByIdAndUpdate(req.body._id, {
        id_utpt: req.body.uid,
        tanggal : req.body.tanggal,
        uid : req.body.barcode,
        total : req.body.total,
        status : {
            enum : req.body.status
        },
        keterangan : req.body.keterangan
    },
        function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send({ data: 'detail utpt opname has been updated... !' });
            }
        })

})


app.post('/api/deleteDetailUtpt', function (req, res) {
    mod = new model(req.body);
    mod.remove({ _id: req.body.id }, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send({ data: 'detail utpt opname has been deleted' });
        }
    })

})



app.get('/api/getDetailUtpt', function (req, res) {
    model.find({}, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
})


module.exports = app;