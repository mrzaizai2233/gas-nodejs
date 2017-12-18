const OrderController = require('../controllers/OrderController')
const router = require('express').Router();

router.get('/orders', OrderController.orders)
router.post('/order/create', OrderController.order_create)
router.post('/order/update', OrderController.order_update)
router.get('/order/delete/:id', OrderController.order_delete)
router.get('/order/order/:id', OrderController.order)

router.post('/order/changeStatus', OrderController.order_change_status)

module.exports = router;