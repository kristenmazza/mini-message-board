const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const format = require('date-fns/format');

const messageSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  added: {
    type: Date,
    default: () => Date.now(),
  },
});

messageSchema.virtual('date__formatted').get(function () {
  return format(this.added, "MM/dd/yyyy 'at' h:mm a");
});

module.exports = mongoose.model('Message', messageSchema);
