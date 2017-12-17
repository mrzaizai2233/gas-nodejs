const User = require('../models/user');

exports.users = function(req, res) {
    User.find(function(err, user) {
        if (err) res.send(err);
        res.send(user);
    })
}
exports.user = function(req, res) {

}

exports.user_create = function(req, res) {
    user = new User();
    user.code = req.body.code;
    user.name = req.body.name;
    user.adress = req.body.adress;
    user.phone = req.body.phone;
    user.status = req.body.status;
    user.save(function(err, data) {
        if (err) res.send(err);
        res.send(data)
    })
}
exports.user_update = function(req, res) {
    try {
        User.findById(req.body._id, function(err, user) {
            if (err) res.send(err);
            user.code = req.body.code;
            user.name = req.body.name;
            user.adress = req.body.adress;
            user.phone = req.body.phone;
            user.status = req.body.status;
            user.save(function(err, data) {
                if (err) res.send(err);
                res.send(data)
            })
        })
    } catch (error) {

    }

}
exports.user_delete = function(req, res) {
    User.findByIdAndRemove(req.params.id, function(err, data) {
        if (err) res.send(err);
        res.send(data);
    })
}
exports.user_findbyname = function(req,res){
    console.log(req.body)
    User.findOne({name: new RegExp('^'+req.body.name+'$', "i")}, function(err, doc) {
        console.log(doc);
        res.send("")
        //Do your action here..
      });
}