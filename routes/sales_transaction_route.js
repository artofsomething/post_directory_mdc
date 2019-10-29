var express = require('express');
var app = express.Router();
//var request = require('request');
var mongo = require('mongoose');
var mod = require('../models/sales_transaction_model.js');

var model = mongo.model('sales_transaction', mod.PostSchema, 'sales_transactioni');

app.post('/api/saveSalesTransactioni', function (req, res) {
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

app.post('/api/updateSalesTransaction', function (req, res) {
    mod = new model(req.body);
    model.findByIdAndUpdate(req.body._id, {
        tanggal : req.body.tanggal,
        users : req.body.users,
        subtotal : req.body.subtotal,
        qty : req.body.qty,
        diskon : req.body.diskon,
        pajak : req.body.pajak,
        total : req.body.total,
        jenis : {
            enum : req.body.jenis
        },
        no_tickets : req.body.no_tickets,
        status : {
            enum : req.body.status
        },
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


app.post('/api/deleteSalesTransaction', function (req, res) {
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