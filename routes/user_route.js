var express = require('express');
var app = express.Router();
//var request = require('request');
var mongo = require('mongoose');
var mod = require('../models/user_model.js');

var model = mongo.model('users', mod.PostSchema, 'users');

app.post('/api/saveUser', function (req, res) {
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

app.post('/api/updateUser', function (req, res) {
    mod = new model(req.body);
    model.findByIdAndUpdate(req.body._id, {
        name: req.body.name,
        address: req.body.address,
        baseTown: req.body.baseTown,
        email: req.body.email,
        whatsapp: req.body.whatsapp,
        tempatLahir: req.body.tempatLahir,
        tanggalLahir: req.body.tanggalLahir,
        gender: req.body.gender,
        username: req.body.username,
        password: req.body.password
    },
        function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send({ data: 'user has been updated... !' });
            }
        })

})


app.post('/api/deleteUser', function (req, res) {
    mod = new model(req.body);
    mod.remove({ _id: req.body.id }, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send({ data: 'user has been deleted' });
        }
    })

})



app.get('/api/getUser', function (req, res) {
    model.find({}, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
})


module.exports = app;