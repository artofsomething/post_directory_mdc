var mongoose = require('mongoose');

var stock_movementSchema = new mongoose.Schema({
  
    id_product : String,
    tanggal : Date,
    id_transaksi : String,
    qty : String,
    last_qty : String,
    exp_date : Date,
    tipe : {
        enum : ['Out','In','Refund','Broken','Disposal'],
        description : 'Can only use one value'
    },
    status : {
        enum : ['Close','Open','Adjusment'],
        description : 'Can only use one value'
    },
    note : String,
    user : String

});

module.exports = mongoose.model('stock_movement', stock_movementSchema);
