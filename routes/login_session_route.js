var express = require('express');
var app = express.Router();
//var request = require('request');
var mongo = require('mongoose');
var mod = require('../models/login_session_model.js');

var model = mongo.model('login_session', mod.PostSchema, 'login_session');

app.post('/api/saveLoginSession', function (req, res) {
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

app.post('/api/updateLoginSession', function (req, res) {
    mod = new model(req.body);
    model.findByIdAndUpdate(req.body._id, {
        uid : req.body.uid,
        tanggal : req.body.tanggal,
        status : req.body.status
    },
        function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send({ data: 'login session opname has been updated... !' });
            }
        })

})


app.post('/api/deleteLoginSession', function (req, res) {
    mod = new model(req.body);
    mod.remove({ _id: req.body.id }, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send({ data: 'Login Session has been deleted' });
        }
    })

})



app.get('/api/getLoginSession', function (req, res) {
    model.find({}, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
})


module.exports = app;