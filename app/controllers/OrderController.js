const Order = require('../models/order');
const OrderDetail = require('../models/order_detail');

exports.orders = function(req, res) {
    Order.find().populate('items').exec(function(err, order) {
        if (err) res.send(err);
        res.send(order);
    })
}

exports.order_create = function(req, res) {
    // console.log(req.body);
    var order = new Order();
    order.code = "req.body.code";
    order.create_at = new Date();
    order.user = req.body.user;
    order.grand_total = req.body.grand_total;
    order.subtotal = req.body.subtotal;
    order.status = 1;
    var items = [];

    req.body.items.forEach(function(item, index) {
        let order_detail = new OrderDetail();
        order_detail.product = item.product;
        order_detail.qty = item.qty;
        order_detail.price = item.price;
        order_detail.discout = item.discout;
        order_detail.discout_total = item.discout_total;
        order_detail.note = item.note;
        order_detail.save(function(err, data) {
            items.push(data._id);
            console.log(data._id)
        })
    });
    console.log(items)
    order.save(function(err, order) {
        // order.items = [];
        // items.forEach(function(item, index) {
        //     item.order = order._id;
        //     item.save(function(err, order_detail) {
        //         // console.log(order_detail._id)
        //         order.items.push(order_detail._id);
        //         console.log(order.items)

        //     });
        // })
        // order.save();
        res.send("ok")

    })
}
exports.order_update = function(req, res) {}
exports.order_delete = function(req, res) {}
exports.order = function() {

}