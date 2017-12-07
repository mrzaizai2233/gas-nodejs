var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = Schema({
    code: String,
    name: String,
    adress: String,
    phone: Number,
    status: Number
})
module.exports = mongoose.model('User', userSchema)