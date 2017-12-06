const productModel = require('../models/product');
exports.products = function(req, res) {

        productModel.find()
        .populate('category')
        .exec(function (err, products) {
          if (err) res.send(err);
          res.send(products)
        });
}

exports.product = function(req, res) {

}

exports.product_create = function(req, res) {
    product = new productModel();
    product.name= req.body.name;
    product.price= req.body.price;
    product.input_price= req.body.input_price;
    product.category= req.body.category;
    product.unit= req.body.unit;
    product.status= req.body.status;
    product.save(function(err,data){
        if(err) res.send(err);
        res.send(data)
    })
}

exports.product_update = function(req, res) {
    if(!req.body._id){
        res.status(500);
        res.send("err");
    }

    productModel.findOne({_id:req.body._id},function(err,product){
        if(err) res.send(err);
        product.name= req.body.name;
        product.price= req.body.price;
        product.input_price= req.body.input_price;
        product.category= req.body.category;
        product.unit= req.body.unit;
        product.status= req.body.status;
        product.save(function(err,product){
            productModel.findOne({_id:product._id})
            .populate('category')
            .exec(function (err, data) {
        
              if (err) res.send(err);
              res.send(data)
            });
        })
    })
   
    
}

exports.product_delete = function(req, res) {
    productModel.findByIdAndRemove(req.params.id,function(err,result){
        if(err) res.send(err)
        
        res.send(result._id) 
    })
}