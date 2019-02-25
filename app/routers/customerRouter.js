const CustomerController = require('../controllers/CustomerController')
const router = require('express').Router();

router.get('/customers', CustomerController.customers)
router.post('/customer/create', CustomerController.customer_create)
router.post('/customer/update', CustomerController.customer_update)
router.get('/customer/delete/:id', CustomerController.customer_delete)
router.get('/customer/customer/:id', CustomerController.customer)
router.post('/customer/findbyname', CustomerController.customer_findbyname)

module.exports = router;