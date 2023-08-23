const express = require('express');
const router = express.Router();
const format = require('date-fns/format');

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
    format: format,
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
    format: format,
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.post('/new', (req, res) => {
  let messageText = req.body.message;
  let messageUser = req.body.name;

  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
    format: format,
  });

  res.redirect('/');
});

module.exports = router;
