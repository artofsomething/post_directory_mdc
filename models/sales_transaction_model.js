var mongoose = require('mongoose');

var sales_transactionSchema = new mongoose.Schema({
    
    tanggal : Date,
    users : String,
    subtotal : String,
    qty : String,
    diskon : String,
    pajak : String,
    total : String,
    jenis : {
        enum : [ 'Cash', 'Credit', 'Card', 'Debit Card', 'Voucher', 'Wechat Pay', 'Alipay', 'Other', 'Split Payment Type'],
        description : 'Can only be one of the enum values'
    },
    no_tickets : String,
    status : {
        enum : ['Open','Hold','Finish','Refund','Cacnel'],
        description : 'Can only be one of them values'
    },
    note : String

});

module.exports = mongoose.model('sales_transaction', sales_transactionSchema);
