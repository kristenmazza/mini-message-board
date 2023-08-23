const express = require('express');
const router = express.Router();
const { messages } = require('./index');

/* GET new message page. */
router.get('/new', function (req, res, next) {
  res.render('form', { title: 'New Message' });
});

module.exports = router;
