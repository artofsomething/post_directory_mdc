var mongoose = require('mongoose');

var chasier_shiftScheme = new mongoose.Schema({
  uid : String,
  tanggal : Date,
  balance : String,
  tipe :String,
  transaction : String
});

module.exports = mongoose.model('chasier_shift', chasier_shiftScheme);
