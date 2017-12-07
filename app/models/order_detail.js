const mongoose = require('mongoose');
const detail_orderSchema = mongoose.Schema({
    order: { type: Schema.Types.ObjectId, ref: 'Order' },
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    qty: Number,
    total: Number,
    discout: Number,
    note: String
})

module.exports = mongoose.model('OrderDetail', detail_orderSchema);