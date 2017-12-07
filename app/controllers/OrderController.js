const Order = require('../models/order');
const OrderDetail = require('../models/order_detail');

exports.orders = function(req,res){
    Order.find().populate('OrderDetail').exec(function(err,order){
        if(err) res.send(err);
        res.send(order);
    })
}

exports.order_create=function(req,res){
    var order = new Order();
    order.code = req.body.code;
    order.create_at = req.body.create_at;
    order.user = req.body.user;
    // order.grand_total = req.body.grand_total;
    // order.subtotal = req.body.subtotal;
    order.status = req.body.status;
    var total=0;
    var items =[];
    req.body.items.forEach(function(item,index) {
        let order_detail = new OrderDetail();
        order_detail.product = item.product;
        order_detail.qty =item.qty;
        order_detail.total = item.total;
        total+= parseInt(order_detail.qty) * parseFloat(order_detail.total);
        order_detail.discout= item.discout;
        order_detail.note = item.note;
        items.push(order_detail);
    });
     order.grand_total = total;
    order.subtotal = total;
    order.save(function(err,order){
        items.forEach(function(item,index){
                item.order = order._id;
                item.save();
        })
        
    })
}