const OrderController = require('../controllers/OrderController')
const router = require('express').Router();

router.get('/orders', OrderController.orders)
router.post('/order/create', OrderController.order_create)
router.post('/order/update', OrderController.order_update)
router.get('/order/delete/:id', OrderController.order_delete)
router.get('/order/order/:id', OrderController.order)

module.exports = router;