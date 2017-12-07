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
    User.findByIdAndUpdate(req.body._id, req.body, function(err, data) {
        if (err) res.send(err);
        res.send(data)
    })
}
exports.user_delete = function(req, res) {
    User.findByIdAndRemove(req.params.id, function(err, data) {
        if (err) res.send(err);
        res.send(data);
    })
}