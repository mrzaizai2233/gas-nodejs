const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const order = Schema({
    code: String,
    create_at: Date,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    grand_total: Number,
    subtotal: Number,
    status: Number
});


module.exports = mongoose.model('Order',order);