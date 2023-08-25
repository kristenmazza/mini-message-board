const express = require('express');
const router = express.Router();
const message_controller = require('../controllers/messageController');

/* GET new message page. */
router.get('/', message_controller.message_create_get);

module.exports = router;
