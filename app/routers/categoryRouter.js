const router = require('express').Router();
const categoryController = require('../controllers/CategoryController');
router.get('/categorys',categoryController.category_list)
router.post('/category/create',categoryController.category_create)
router.post('/category/update',categoryController.category_update)
router.get('/category/delete/:id',categoryController.category_delete)
router.post('/category/change_status',categoryController.change_status)

module.exports=router;