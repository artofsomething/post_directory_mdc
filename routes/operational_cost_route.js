var express = require('express');
var app = express.Router();
//var request = require('request');
var mongo = require('mongoose');
var mod = require('../models/operational_cost_model.js');

var model = mongo.model('operation_cost', mod.PostSchema, 'operational_cost');

app.post('/api/saveOperationalCost', function (req, res) {
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

app.post('/api/updateOperationalCost', function (req, res) {
    mod = new model(req.body);
    model.findByIdAndUpdate(req.body._id, {
        judul : req.body.judul,
        supervision : req.body.supervisior,
        jumlah : req.body.jumlah,
        tanggal : req.body.tanggal,
        keterangan : req.body.keterangan
    },
        function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send({ data: 'data has been updated... !' });
            }
        })

})


app.post('/api/deleteOperationalCost', function (req, res) {
    mod = new model(req.body);
    mod.remove({ _id: req.body.id }, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send({ data: 'Data has been deleted' });
        }
    })

})



app.get('/api/getOperationalCost', function (req, res) {
    model.find({}, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
})


module.exports = app;