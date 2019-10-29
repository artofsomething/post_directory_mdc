var mongoose = require('mongoose');

var kategoriSchema = new mongoose.Schema({
    nama : String,
    keterangan : String,
    parents : String
});

module.exports = mongoose.model('kategori', kategoriSchema);
