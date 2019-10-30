var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  
    kode : String,
    barcode : String,
    nama_kategori : String,
    subkategori : String,
    cqty : String,
    harga_beli : String,
    harga1 : String,
    harga2 : String,
    harga3 : String,
    satuan : String,
    supplier : String,
    gambar : String
    
});

module.exports = mongoose.model('products', productSchema);
