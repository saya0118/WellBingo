const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  text: String,
});

todoSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

mongoose.model("todos", todoSchema);
