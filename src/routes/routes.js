const express = require('express');
const router = express.Router();
const accountController = require('../controllers/Account-controller.js');

router.get('/', accountController.makeSome);

module.exports = router;