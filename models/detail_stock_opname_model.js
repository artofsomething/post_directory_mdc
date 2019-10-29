var mongoose = require('mongoose');

var detail_stock_opnameSchema = new mongoose.Schema({
  
    id_stock : String,
    id_product : String,
    system : String,
    actual : String,
    differnce : String
});

module.exports = mongoose.model('detail_stock_opname', detail_stock_opnameSchema);
