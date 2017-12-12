const Order = require('../models/order');
const OrderDetail = require('../models/order_detail');

exports.orders = function(req, res) {
    Order.find()
        .populate({
            path: 'items',
            populate: {
                path: 'product'
            }
        })
        .populate('user')
        .exec(function(err, order) {
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
        items.push(new Promise(function(resolve, reject) {

            let order_detail = new OrderDetail();
            order_detail.product = item.product;
            order_detail.qty = item.qty;
            order_detail.price = item.price;
            order_detail.discout = item.discout;
            order_detail.discout_total = item.discout_total;
            order_detail.note = item.note;
            order_detail.save(function(err, data) {
                resolve(data._id)
            });
        }))
    })
    Promise.all(items).then(data => {
        order.items = data;
        order.save(function(err, order) {
            res.send(order)
        })
    })

}
exports.order_update = function(req, res) {}
exports.order_delete = function(req, res) {
    Order.find({ _id: req.params.id }).populate('items').exec(function(err, order) {

        if (order.items) {
            order.items.forEach(function(order_detail) {
                OrderDetail.findByIdAndRemove(order_detail, function(err) {
                    console.log("delete successs");
                });
            })
        }
    })

    Order.findByIdAndRemove({ _id: req.params.id }, function(err, order) {
        res.send(order._id);
    });


}
exports.order = function() {

}