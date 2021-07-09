const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const toDoSchema = new Schema({
    text: { type: String, required: true, index: true },
    isCompleted: Boolean,
    order: Number
}, { timestamps: { createdAt: 'created_at', updatedAt : 'updated_at ' } });

toDoSchema.set("toJSON", {
  transform: (_, returnedObj) => {
    returnedObj.id = returnedObj._id;
    delete returnedObj._id;
    delete returnedObj.__v;

    return returnedObj
  },
});

export const ToDo = mongoose.model("ToDo", toDoSchema);

