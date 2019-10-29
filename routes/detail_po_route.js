var express = require('express');
var app = express.Router();
//var request = require('request');
var mongo = require('mongoose');
var mod = require('../models/detail_po_model.js');

var model = mongo.model('detail_po', mod.PostSchema, 'detail_po');

app.post('/api/saveDetailPo', function (req, res) {
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

app.post('/api/updateDetailPo', function (req, res) {
    mod = new model(req.body);
    model.findByIdAndUpdate(req.body._id, {
        id_transaksi: req.body.uid,
        id_product : req.body.tanggal,
        nama_product : req.body.balance,
        qty : req.body.qty,
        harga : req.body.harga,
        total : req.body.total,
        expired_date : req.body.expired_date,
        status : {
            enum : req.body.status
        }
    },
        function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send({ data: 'detail po has been updated... !' });
            }
        })

})


app.post('/api/deleteDetailPo', function (req, res) {
    mod = new model(req.body);
    mod.remove({ _id: req.body.id }, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send({ data: 'detail po has been deleted' });
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