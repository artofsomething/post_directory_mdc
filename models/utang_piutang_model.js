var mongoose = require('mongoose');

var utang_piutangSchema = new mongoose.Schema({
  
    id_transaksi : String,
    tanggal_transaksi : Date,
    uid : String,
    jatuh_tempo : String,
    total : String,
    sisa : String,
    terbayar : String,
    status : String, //Open,Installment,Finish
    tipe : String,//Sales,Purchase,

});

module.exports = mongoose.model('utang_piutang', utang_piutangSchema);
