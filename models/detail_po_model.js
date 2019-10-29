var mongoose = require('mongoose');

var detail_poSchema = new mongoose.Schema({
  uid : String,
  id_transaksi : Date,
  id_product : String,
  qty :String,
  harga : String,
  total : String,
  expired_date : Date,
  status : String
});

module.exports = mongoose.model('detail_po', detail_poSchema);
