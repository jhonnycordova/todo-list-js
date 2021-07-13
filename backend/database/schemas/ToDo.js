const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
  text: { type: String, required: true, index: true },
  isCompleted: { type: Boolean, default: false },
  order: Number,
}, { timestamps: true });

const ToDo = mongoose.model('ToDo', toDoSchema);
module.exports = ToDo;
