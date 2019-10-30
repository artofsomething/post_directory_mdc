var mongoose = require('mongoose');

var stock_movementSchema = new mongoose.Schema({
  
    id_product : String,
    tanggal : Date,
    id_transaksi : String,
    qty : String,
    last_qty : String,
    exp_date : Date,
    tipe : String, //Out,In,Refund, Broken,Disposal
    status : String, //Close,Open,Adjustment
    note : String,
    user : String

});

module.exports = mongoose.model('stock_movement', stock_movementSchema);
