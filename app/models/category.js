var mongoose = require('mongoose');
var Schema = mongoose.Schema;

categorySchema= Schema({
    name:String,
    status:Number
})

module.exports= mongoose.model('Category',categorySchema)