const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/Account-controller.js');

router.post('/', playlistController.createList);

module.exports = router;