const express = require('express');
const router = express.Router();
const accountController = require('../controllers/Account-controller.js');

router.get('/', accountController.makeSome);
router.post('/comparePhotos', accountController.comparePhotos);

module.exports = router;