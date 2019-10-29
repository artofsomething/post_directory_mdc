var express = require('express');
var app = express.Router();
//var request = require('request');
var mongo = require('mongoose');
var mod = require('../models/post_dir_model.js');

var model = mongo.model('postdir', mod.PostSchema, 'postdir');

app.post('/api/savePost', function (req, res) {
    mod = new model(req.body);
    mod.save(function (err, data) {
        if(err){
            res.send(err);
        }else{
            res.send({data:"record has been inserted"});
            //console.log(mod);
        }
    })

})

app.post('/api/updatePost', function (req, res) {
    mod = new model(req.body);
    model.findByIdAndUpdate(req.body._id, { 
        nama: req.body.nama, 
        no_telp : req.body.no_telp,
        email : req.body.email,
        website : req.body.website,
        fax : req.body.fax,
        alamat : req.body.alamat,
        logo : req.body.logo,
        logo_text : req.body.logo_text,
        status : req.body.status
     },
        function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send({ data: 'record has been updated... !' });
            }
        })

})


app.post('/api/deletePost', function (req, res) {
    mod = new model(req.body);
    mod.remove({ _id: req.body.id }, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.send({ data: 'record has been deleted' });
        }
    })

})



app.get('/api/getPost', function (req, res) {
    model.find({}, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
})


module.exports = app;