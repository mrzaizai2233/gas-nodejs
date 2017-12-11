const Order = require('../models/order');
const OrderDetail = require('../models/order_detail');
const async = require('async')
exports.orders = function(req,res){
    Order.find()
    .populate('items')
    .populate('user')    
    .exec(function(err,order){
        if(err) res.send(err);
        res.send(order);
    })
}

exports.order_create=function(req,res){
    var order = new Order();
    order.code = req.body.code;
    order.create_at = req.body.create_at;
    order.user = req.body.user;
    order.grand_total = req.body.grand_total;
    order.subtotal = req.body.subtotal;
    order.status = req.body.status;
    var permise=[];
    req.body.items.forEach(function(item,index) {
        permise.push(new Promise(function(resovel,rej){
            let order_detail = new OrderDetail();
            order_detail.product = item.product;
            order_detail.qty =item.qty;
            order_detail.price = item.price;
            order_detail.discout= item.discout;
            order_detail.discout_total= item.discout_total;
            order_detail.note = item.note;
            order_detail.save(function(err,res){
                resovel(res._id)
            })
        }))
    });

    Promise.all(permise).then(data=>{
        order.items = data;
        order.save(function(err,data){
            res.send("ok")
        })
    })
}
exports.order_update=function(req,res){}
exports.order_delete=function(req,res){}
exports.order=function(){

}