const express = require('express');
const router = express.Router();
const othersController = require('../controllers/post_controller');
router.get('/others', othersController.others);
module.exports = router;