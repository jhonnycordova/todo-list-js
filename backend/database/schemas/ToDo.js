const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
  text: { type: String, required: true, index: true },
  isCompleted: { type: Boolean, default: false },
  order: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, { timestamps: true });

const ToDo = mongoose.model('ToDo', toDoSchema);
module.exports = ToDo;
