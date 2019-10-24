var mongoose = require('mongoose');


var PostSchema = new mongoose.Schema({
  nama : String,
  no_telp : String,
  email : String,
  website : String,
  fax :String,
  alamat : String,
  logo : String,
  logo_text : String,
  status : String,

});


module.exports = mongoose.model('postdir', PostSchema);
