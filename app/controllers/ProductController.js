const productModel = require('../models/product');
const mongoose = require('mongoose');
exports.products = function(req, res) {

    productModel.find()
        .exec(function(err, products) {
            if (err) res.send(err);
            res.send(products)
        });
}

exports.product = function(req, res) {

}

exports.product_create = function(req, res) {
    product = new productModel();
    product.name = req.body.name;
    product.code = req.body.code;
    product.price = req.body.price;
    product.input_price = req.body.input_price;
    product.category = req.body.category;
    product.unit = req.body.unit;
    product.status = req.body.status;
    product.save(function(err, data) {
        if (err) res.send(err);
        res.send(data)
    })
}

exports.product_update = function(req, res) {

    productModel.findById(req.body._id, function(err, product) {
        console.log(product);
        if (err) res.send(err);
        if (!product) {
            res.status(400).send("err")
        }
        if (product != undefined) {
            product.name = req.body.name;
            product.code = req.body.code;
            product.price = req.body.price;
            product.input_price = req.body.input_price;
            product.category = req.body.category;
            product.unit = req.body.unit;
            product.status = req.body.status;
            product.save(function(err, data) {
                res.send(data);
            })
        } else {
            res.send("no product updated");
        }


    })


}

exports.product_delete = function(req, res) {
    productModel.findByIdAndRemove(req.params.id, function(err, result) {
        if (err) res.send(err)

        res.send(result._id)
    })
}

exports.change_status = function(req,res){
    try {
        productModel.findById(req.body._id).exec(function(err,result){
            result.status = !result.status;
            result.save(function(err,data){
                res.send(data._id)
            })
        });
    } catch(err){
        res.send(err)
    }
   
}