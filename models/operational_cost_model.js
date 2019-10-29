var mongoose = require('mongoose');

var operasional_costSchema = new mongoose.Schema({
  
    judul : String,
    supervisor : String,
    jumlah : String,
    tanggal : Date,
    keterengan : String
    
});

module.exports = mongoose.model('detail_uptp', operasional_costSchema);
