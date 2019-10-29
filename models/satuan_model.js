var mongoose = require('mongoose');

var satuanSchema = new mongoose.Schema({
  
    nama : String,
    keterangan : String

});

module.exports = mongoose.model('satuan', satuanSchema);
