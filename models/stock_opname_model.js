var mongoose = require('mongoose');

var stock_opnameSchema = new mongoose.Schema({
  
    tanggal : String,
    uid : String,
    supervisior : String,
    status : {
        enum : ['Open','Finish'],
        description : 'Can only be used one of the enum Values'
    },
    differences : String,
    password : String,
    total_item : String,
    tanggal_finish : Date

});

module.exports = mongoose.model('stock_opname', stock_opnameSchema);
