var express = require('express');
var router = express.Router();
var userController = require('../app/controllers/user.js');

/* GET users listing. */
router.get('/login', userController.renderLogin);

module.exports = router;
