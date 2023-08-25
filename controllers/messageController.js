const Message = require('../models/message.js');
const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');

exports.message_create_get = asyncHandler(async (req, res, next) => {
  res.render('form', { title: 'New Message' });
});

// Handle message create on POST.
exports.message_create_post = [
  // Validate and sanitize fields.
  body('name', 'Name must not be empty.').trim().isLength({ min: 1 }).escape(),
  body('message', 'Message must not be empty.')
    .trim()
    .isLength({ min: 1 })
    .escape(),

  // Process request after validation and sanitization.
  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a Message object with escaped and trimmed data.
    const message = new Message({
      user: req.body.name,
      text: req.body.message,
    });

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/error messages.
      res.render('form', { title: 'New Message' });
    } else {
      // Data from form is valid. Save message.
      await message.save();
      res.redirect('/');
    }
  }),
];

// Display list of messages
exports.message_list = asyncHandler(async (req, res, next) => {
  const allMessages = await Message.find({}).exec();

  res.render('index', {
    title: 'Mini Messageboard',
    message_list: allMessages,
  });
});
