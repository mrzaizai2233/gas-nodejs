const Customer = require('../models/customer');

exports.customers = function (req, res) {
    Customer.find(function (err, customer) {
        if (err) res.send(err);
        res.send(customer);
    })
}
exports.customer = function (req, res) {

}

exports.customer_create = function (req, res) {
    customer = new Customer();
    customer.code = req.body.code;
    customer.name = req.body.name;
    customer.address = req.body.address;
    customer.phone = req.body.phone;
    customer.status = req.body.status;
    customer.save(function (err, data) {
        if (err) res.send(err);
        res.send(data)
    })
}
exports.customer_update = function (req, res) {
    try {
        Customer.findById(req.body._id, function (err, customer) {
            if (err) res.send(err);
            customer.code = req.body.code;
            customer.name = req.body.name;
            customer.address = req.body.address;
            customer.phone = req.body.phone;
            customer.status = req.body.status;
            customer.save(function (err, data) {
                if (err) res.send(err);
                res.send(data)
            })
        })
    } catch (error) {

    }

}
exports.customer_delete = function (req, res) {
    Customer.findByIdAndRemove(req.params.id, function (err, data) {
        if (err) res.send(err);
        res.send(data);
    })
}
exports.customer_findbyname = function (req, res) {
    console.log(req.body)
    Customer.findOne({
        name: new RegExp('^' + req.body.name + '$', "i")
    }, function (err, doc) {
        console.log(doc);
        res.send("")
        //Do your action here..
    });
}