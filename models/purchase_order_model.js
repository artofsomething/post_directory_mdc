var mongoose = require('mongoose');

var purchase_orderSchema = new mongoose.Schema({
  
    id_supplier : String,
    tanggal : String,
    subtotal : String,
    qty : String,
    total : String,
    jenis : String,
    status : String, // Open,Pending,Finish,Installment,Send,Return
    pajak : String,
    cicilan : String,
    user : String,
    note : String

});

module.exports = mongoose.model('purchase_order', purchase_orderSchema);
