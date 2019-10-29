var express = require('express');
var app = express.Router();
//var request = require('request');
var mongo = require('mongoose');
var mod = require('../models/log_activity_model.js');

var model = mongo.model('log_activity', mod.PostSchema, 'log_activity');

app.post('/api/saveLogActivity', function (req, res) {
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

app.post('/api/updateLogActivity', function (req, res) {
    mod = new model(req.body);
    model.findByIdAndUpdate(req.body._id, {
        id_transaction : req.body.id_transaction,
        action : req.body.action,
        tanggal : req.body.tanggal,
        users : req.body.users
    },
        function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send({ data: 'log Activity has been updated... !' });
            }
        })

})


app.post('/api/deleteLogActivity', function (req, res) {
    mod = new model(req.body);
    mod.remove({ _id: req.body.id }, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send({ data: 'log activity has been deleted' });
        }
    })

})



app.get('/api/getLogActivity', function (req, res) {
    model.find({}, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
})


module.exports = app;