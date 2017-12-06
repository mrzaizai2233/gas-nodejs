const categoryModel = require('../models/category')
exports.category_list = function(req,res){
    categoryModel.find(function(err,categorys){
        if(err)
        res.send(err);
        res.send(categorys)
    })
}

exports.category_create = function(req,res){
        var category = new categoryModel();
        category.name = req.body.name;
        category.status = req.body.status;
        category.save(function(err,data) {
            if (err)
                res.send(err);

            res.json(data);
        });

}
exports.category_update = function(req,res){
        var query = categoryModel.findById(req.body._id).exec(function(err,result){
            result.name = req.body.name;
            result.status = req.body.status;
            result.save(function(err,data){
                res.send(data)
            })
        });
}
exports.category_delete = function(req,res){
    categoryModel.findByIdAndRemove(req.params.id,function(err,result){
        if(err) res.send(err)
        res.send(result)
    })
}