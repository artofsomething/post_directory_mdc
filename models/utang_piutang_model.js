var mongoose = require('mongoose');

var utang_piutangSchema = new mongoose.Schema({
  
    id_transaksi : String,
    tanggal_transaksi : Date,
    uid : String,
    jatuh_tempo : String,
    total : String,
    sisa : String,
    terbayar : String,
    status : {
        enum : ['Open','Installment','Finish'],
        description : 'can only used one of the enum values'
    },
    tipe : {
        emum : ['Sales','Purchase'],
        description : 'can only used one of the enum values'
    }

});

module.exports = mongoose.model('utang_piutang', utang_piutangSchema);
