var express = require('express');
//var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongoose');

var db = mongo.connect('mongodb://localhost:27017/PostDirectory', function (err, response) {
    if (err) { console.log(err); }
    else { console.log('connected to ' + db, '+', response); }
});

var app = express()
app.use(bodyParser());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


var Schema = mongo.Schema;

/*

  `nama` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `no_telp` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `website` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `fax` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `alamat` text COLLATE utf8_unicode_ci NOT NULL,
  `logo` text COLLATE utf8_unicode_ci NOT NULL,
  `logo_text` text COLLATE utf8_unicode_ci NOT NULL,
  `status` enum('Active','Not Active') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Not Active'


*/


var UsersSchema = new Schema({
    nama : { type: String },
    no_telp : { type: String },
    email : { type : String },
    website : { type : String },
    fax : { type : String },
    alamat : { type : String },
    logo : { type : String },
    logo_text : { type : String },
    status : { type : String }
}, { versionKey: false });

var model = mongo.model('users', UsersSchema, 'users');

app.post('/api/savePost', function (req, res) {
    var mod = new model(req.body);
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
    var mod = new model(req.body);
    mod.findByIdAndUpdate(req.body._id, { 
        name: req.body.name, 
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
    var mod = new model(req.body);
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

app.listen(5050, function () {
    console.log('contoh listening on port : 5050!');
})