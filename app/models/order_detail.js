const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detail_orderSchema = Schema({
    order: { type: Schema.Types.ObjectId, ref: 'Order' },
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    qty: Number,
    price: Number,
    discout: Number,
    discout_total: Number,
    note: String
})

module.exports = mongoose.model('OrderDetail', detail_orderSchema);