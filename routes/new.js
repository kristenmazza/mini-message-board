var express = require('express');
var router = express.Router();

/* GET new message page. */
router.get('/new', function (req, res, next) {
  res.render('form', { title: 'New Message' });
});

module.exports = router;
