var mongoose = require('mongoose');

var temp_most_sales_itemSchema = new mongoose.Schema({
  
    id_product : String,
    qty : String,
    tanggal : Date

});

module.exports = mongoose.model('temp_most_sales_item', temp_most_sales_itemSchema);
