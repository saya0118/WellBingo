const mongoose = require("mongoose");

let Todo = mongoose.model("todos");

getTodos = async (req, res) => {
  await Todo.find({}, (err, todos) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!todos.length) {
      return res
        .status(404)
        .json({ success: false, error: "Todo is not found." });
    }

    return res.status(200).json({ success: true, items: todos })
  }).clone().catch(err => console.log(err))
};



module.exports = {
    getTodos,
}