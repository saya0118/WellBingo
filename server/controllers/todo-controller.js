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

addTodos = (req, res) => {
  const todo = new Todo(req.body);
  todo
    .save()
    .then(() => {
      return res
        .status(200)
        .json({ success: true, items: todo.id, yay: "yay" });
    })
    .catch((error) => {
      console.log(err);
    });
};

updateTodos = (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      return res.status(200).json({ success: true, items: data });
    })
    .catch((err) => console.log(err));
};

deleteTodos = (req, res) => {
  Todo.findByIdAndRemove(req.params.id)
    .then(() => {
      return res.status(200).json({ success: true, items: req.params.id });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getTodos,
  addTodos,
  updateTodos,
  deleteTodos,
};
