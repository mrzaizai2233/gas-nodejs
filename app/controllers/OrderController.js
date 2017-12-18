const Order = require('../models/order');
const OrderDetail = require('../models/order_detail');
const async = require('async')


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
    order.status = req.body.status;

    var items = [];
    req.body.items.forEach(function(item, index) {
        items.push(new Promise(function(resovel, rej) {
            let order_detail = new OrderDetail();
            order_detail.product = item.product;
            order_detail.qty = item.qty;
            order_detail.price = item.price;
            order_detail.discout_fixed = item.discout_fixed;
            order_detail.discout_percent = item.discout_percent;
            order_detail.note = item.note;
            order_detail.status = item.status;
            order_detail.order = order._id;
            order_detail.save(function(err, res) {
                resovel(res._id)
            })
        }))
    });
    Promise.all(items).then(items => {
        order.items = items;
        order.save(function(err, data) {
            res.send(data);
        });
    })

}
exports.order_update = function(req, res) {}
exports.order_delete = function(req, res) {
    Order.find({ _id: req.params.id }).populate('items').exec(function(err, order) {
        if (order.items) {
            order.items.forEach(function(order_detail) {
                OrderDetail.findByIdAndRemove(order_detail._id, function(err) {});
            })
        }
    })
    Order.findByIdAndRemove({ _id: req.params.id }, function(err, order) {
        res.send(order._id);
    });
}
exports.order = function() {

}

exports.order_change_status = function(req,res){
    // console.log(req.body)
    Order.findById(req.body._id,function(err,order){
        // console.log(req.body._id);
        order.status = !order.status;
        order.save(function(err,data){
            res.send('success')
        })
    })
}