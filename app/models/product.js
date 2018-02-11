var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = Schema({
    name: String,
    code: String,
    price: Number,
    input_price: Number,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    unit: String,
    status: Number
})
module.exports = mongoose.model('Product', productSchema);