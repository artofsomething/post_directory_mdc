var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var chasierShiftScheme = new mongoose.Schema({
  ID : ObjectId,
  uid : String,
  tanggal : Date,
  balance : String,
  tipe :String,
  transaction : String
});

module.exports = mongoose.model('cashier_shift', chasierShiftScheme);
