const mongoose = require('mongoose');
const order = mongoose.Schema({
    code: String,
    create_at: Date,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    grand_total: Number,
    subtotal: Number,
    status: Number
});


module.exports = mongoose.model('Order',order);