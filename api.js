var express = require('express');
//var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongoose');

var company_profile = require('./routes/company_profile_route');
var cashier_shift = require('./routes/cashier_shift_route');
var detail_po = require('./routes/detail_po_route');
var detail_sales = require('./routes/detail_sales_route');
var detail_stock = require('./routes/detail_stock_opname_route');
var detail_utpt = require('./routes/detail_utpt_route');
var kategori = require('./routes/kategori_route');
var log_act = require('./routes/log_activity_route');
var log_sess = require('./routes/login_session_route');
var ops_cost = require('./routes/operational_cost_route');
var products = require('./routes/products_route');
var purchase_order = require('./routes/purchase_order_route');
var sales_trans = require('./routes/sales_transaction_route');
var satuan = require('./routes/satuan_route');
var stock_move = require('./routes/stock_movement_route');
var stock_opname = require('./routes/stock_opname_route');
var supplier = require('./routes/supplier_route');
var temp_report_route = require('./routes/temp_stock_report_route');
var utang_piutang = require('./routes/utang_piutang_route');
var users = require('./routes/user_route')

var db = mongo.connect('mongodb://localhost:27017/PostDirectory', function (err, response) {
    if (err) { console.log(err); }
    else { console.log('connected to ' + db, '+', response); }
});

var app = express()
app.use(bodyParser());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));



app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.use('/companyProfile', company_profile);
app.use('/cashierShift', cashier_shift);
app.use('/detailPo', detail_po);
app.use('/detailSales', detail_sales);
app.use('/detailStock', detail_stock);
app.use('/detailUptp', detail_utpt);
app.use('/kategori', kategori);
app.use('/logActivity', log_act);
app.use('/logSession', log_sess);
app.use('/opsCost', ops_cost);
app.use('/products', products);
app.use('/purchaseOrder', purchase_order);
app.use('/salesTransaction', sales_trans);
app.use('/satuan', satuan);
app.use('/stockMove', stock_move);
app.use('/stockOpname', stock_opname);
app.use('/supplier', supplier);
app.use('/tempReport', temp_report_route);
app.use('/utangPiutang', utang_piutang);
app.use('/user', users);

//var Schema = mongo.Schema;

/*

  `nama` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `no_telp` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `website` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `fax` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `alamat` text COLLATE utf8_unicode_ci NOT NULL,
  `logo` text COLLATE utf8_unicode_ci NOT NULL,
  `logo_text` text COLLATE utf8_unicode_ci NOT NULL,
  `status` enum('Active','Not Active') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Not Active'


*/


app.listen(5050, function () {
    console.log('contoh listening on port : 5050!');
})
