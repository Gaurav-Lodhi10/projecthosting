const express = require('express');
const router = express.Router();
const userController = require('../controllers/users_controller');
// router.get('/user', userController.post);
router.get('/profile', userController.profile);
router.get('/login', userController.login);
module.exports = router;