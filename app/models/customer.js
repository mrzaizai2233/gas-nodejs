var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var customerSchema = Schema({
    code: String,
    name: String,
    address: String,
    phone: Number,
    status: Number
})
module.exports = mongoose.model('Customer', customerSchema)