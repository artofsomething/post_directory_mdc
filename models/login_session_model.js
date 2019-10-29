var mongoose = require('mongoose');

var login_sessionSchema = new mongoose.Schema({
  
    uid : String,
    tanggal : Date,
    status : String
    
});

module.exports = mongoose.model('login_session', login_sessionSchema);
