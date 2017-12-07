const UserController = require('../controllers/UserController')
const router = require('express').Router();

router.get('/users', UserController.users)
router.post('/user/create', UserController.user_create)
router.post('/user/update', UserController.user_update)
router.get('/user/delete/:id', UserController.user_delete)
router.get('/user/user/:id', UserController.user)

module.exports = router;