var express = require('express');
var app = express.Router();
//var request = require('request');
var mongo = require('mongoose');
var mod = require('../models/purchase_order_model.js');

var model = mongo.model('pruchase_order', mod.PostSchema, 'pruchase_order');

app.post('/api/savePurchaseOrder', function (req, res) {
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

app.post('/api/updatePurchaseOrder', function (req, res) {
    mod = new model(req.body);
    model.findByIdAndUpdate(req.body._id, {
        id_supplier : req.body.id_supplier,
        tanggal : req.body.tanggal,
        subtotal : req.body.subtotal,
        qty : req.body.qty,
        total : req.body.total,
        jenis : {
            enum : req.body.jenis
        },
        status : {
            enum : req.body.status
        },
        pajak : req.body.pajak,
        cicilan : req.body.cicilan,
        user : req.body.user,
        note : req.body.note
    },
        function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send({ data: 'data has been updated... !' });
            }
        })

})


app.post('/api/deletePurchaseOrder', function (req, res) {
    mod = new model(req.body);
    mod.remove({ _id: req.body.id }, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send({ data: 'data has been deleted' });
        }
    })

})



app.get('/api/getPurchaseOrder', function (req, res) {
    model.find({}, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
})


module.exports = app;