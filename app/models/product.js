var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = Schema({
    name: String,
    price: Number,
    input_price: Number,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    unit: String,
    status: { type: String, enum: ['in_stock', 'out_stock'], default: 'in_stock' }
})
module.exports = mongoose.model('Product', productSchema);