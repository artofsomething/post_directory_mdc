
var mongoose = require('mongoose');

var log_activitySchema = new mongoose.Schema({
  
    id_trasaction : String,
    actioin : String,
    tanggal : Date,
    users : String
    
});

module.exports = mongoose.model('log_activity', log_activitySchema);
