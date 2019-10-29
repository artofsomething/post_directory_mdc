var mongoose = require('mongoose');

var supplierSchema = new mongoose.Schema({
  
   nama : String,
   no_telp : String,
   website : String,
   email : String,
   cp : String,
   cp_phone : String,
   alamat : String

});

module.exports = mongoose.model('supplier', supplierSchema);
