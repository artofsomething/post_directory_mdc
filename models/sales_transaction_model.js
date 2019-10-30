var mongoose = require('mongoose');

var sales_transactionSchema = new mongoose.Schema({
    
    tanggal : Date,
    users : String,
    subtotal : String,
    qty : String,
    diskon : String,
    pajak : String,
    total : String,
    jenis : String,//Cash,Credit Card,Debit Card, Voucher,Wechatpay, Alipay, Other, Split Payment Type
    no_tickets : String,
    status : String, // Open,Hold, Finish,Refund, Cancel 
    note : String

});

module.exports = mongoose.model('sales_transaction', sales_transactionSchema);
