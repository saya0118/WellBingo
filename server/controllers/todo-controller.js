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

    return res.status(200).json({ success: true, items: todos });
  })
    .clone()
    .catch((err) => console.log(err));
};

editTodos = async (req, res) => {
  await Todo.findById({}, (err) => {
    const todo = new Todo({
      text: String,
    });

    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    return res.status(200).json({ success: true, items: todo.id });
  })
    .clone()
    .catch((err) => console.log(err));
};

updateTodos = (req, res) => {
  await Todo.findByIdAndUpdate({}, (err, todos) => {

    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    return res.status(200).json({ success: true, items: todos.id });
  })
    .clone()
    .catch((err) => console.log(err));
};

deleteTodos = async (req, res) => {
  await Todo.findByIdAndRemove({}, (err, todos) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    return res.status(200).json({ success: true, items: todos.id });
  })
    .clone()
    .catch((err) => console.log(err));
};

module.exports = {
  getTodos,
  editTodos,
  updateTodos,
  deleteTodos,
};
