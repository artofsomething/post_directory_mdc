var express = require('express');
//var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongoose');

var post_dir = require('./routes/post_dir_route');
var users = require('./routes/user_route')

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


app.use('/postdir', post_dir);
app.use('/user', users);

//var Schema = mongo.Schema;

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


app.listen(5050, function () {
    console.log('contoh listening on port : 5050!');
})