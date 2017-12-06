const productController = require('../controllers/ProductController')
const router = require('express').Router();

router.get('/products',productController.products)
router.post('/product/create',productController.product_create)
router.post('/product/update',productController.product_update)
router.get('/product/delete/:id',productController.product_delete)
router.get('/product/product/:id',productController.product)
module.exports = router;