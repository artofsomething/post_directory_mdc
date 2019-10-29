var express = require('express');
var app = express.Router();
//var request = require('request');
var mongo = require('mongoose');
var mod = require('../models/utang_piutang_model.js');

var model = mongo.model('utang_piutang', mod.PostSchema, 'utang_piutang');

app.post('/api/saveUtangPiutang', function (req, res) {
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

app.post('/api/updateUtangPiutang', function (req, res) {
    mod = new model(req.body);
    model.findByIdAndUpdate(req.body._id, {
        id_transaksi : req.body.id_transaksi,
        tanggal_transaksi : req.body.tanggal_transaksi,
        uid : req.body.uid,
        jatuh_tempo : req.body.jatuh_tempo,
        total : req.body.total,
        sisa : req.body.sisa,
        terbayar : req.body.terbayar,
        status : {
            enum : req.body.status
        },
        tipe : {
            enum : req.body.tipe
        }
    },
        function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send({ data: 'Data has been updated... !' });
            }
        })

})


app.post('/api/deleteUtangPiutang', function (req, res) {
    mod = new model(req.body);
    mod.remove({ _id: req.body.id }, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send({ data: 'Data has been deleted' });
        }
    })

})



app.get('/api/getUtangPiutang', function (req, res) {
    model.find({}, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
})


module.exports = app;