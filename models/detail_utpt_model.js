var mongoose = require('mongoose');

var detail_utptSchema = new mongoose.Schema({
  
    id_utpt : String,
    tanggal : Date,
    uid : String,
    total : String,
    status : String,
    keterangan : String
    
});

module.exports = mongoose.model('detail_uptp', detail_uptpSchema);
