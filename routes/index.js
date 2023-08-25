const express = require('express');
const router = express.Router();
const message_controller = require('../controllers/messageController');

/* GET home page. */
router.get('/', message_controller.message_list);

router.post('/new', message_controller.message_create_post);

module.exports = router;
