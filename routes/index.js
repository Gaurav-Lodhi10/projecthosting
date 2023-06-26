// const express = require('express');
// const router = express.Router();
// // console.log('router loaded');

// const homeController = require('../controllers/home_controller');
// router.get('/', homeController.home);

// router.use('/users', require('./users'));

// module.exports = router;

const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
const postController = require('../controllers/post_controller');
const userController = require('../controllers/users_controller');
const othersController = require('../controllers/others_controllers');
// const othersController = require('../controllers/others_controllers');
console.log('router loaded');


router.get('/', homeController.home);
router.get('/post', postController.post);
router.get('/users', userController.users);
router.get('/others', othersController.others);
router.use('/users', require('./users'));





module.exports = router;