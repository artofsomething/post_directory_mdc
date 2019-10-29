var mongoose = require('mongoose');

var temp_stock_reportSchema = new mongoose.Schema({
  
   products : String,
   barcode : String,
   category : String,
   pruchase_price : String,
   current_qty : String,
   qty_in : String,
   qty_out : String,
   qty_refund : String,
   qty_broken : String,
   total_puchase : String,
   total_sales : String,
   total_refund : String,
   total_discount : String

});

module.exports = mongoose.model('temp_stock_report', temp_stock_reportSchema);
