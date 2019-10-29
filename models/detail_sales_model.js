var mongoose = require('mongoose');

var detail_salesSchema = new mongoose.Schema({

    id_stransaksi : String,
    id_porduct : String,
    barcode : String,
    nama_product : String,
    qty : String,
    harga : String,
    diskon : String,
    total : String,
    Status : String
});

module.exports = mongoose.model('detail_sales', detail_salesSchema);
