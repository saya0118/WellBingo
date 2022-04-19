const mongoose = require('mongoose');

let Todo = mongoose.model('todos');

getTodos = async (req, res) => {
    await Todo.find({}, (err, todos) => {

        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!todos.length) {
            return res
                .status(404)
                .json({ success: false, error: `Todo not found` })
        }

        return res.status(200).json({ success: true, items: todos })
    }).clone().catch(err => console.log(err));
}

createTodo = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie'
        })
    }

    const todo = new Todo(body);

    if (!todo) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }

    todo
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: todo.id,
                message: 'Todo created'
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Todo not created!',
            })
        })
}

updateTodo = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            message: "Data to update can not be empty!"
        })
    }

    const id = req.params.id;
    Todo.findByIdAndUpdate(id, body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).json({
                    message: `Cannot update Todo with id=${id}. Maybe Todo was not found!`
                });
            } else res.json({ message: "Todo was updated successfully." });
        })
        .catch(error => {
            res.status(500).send({
                error,
                message: "Error updating Todo with id=" + id
            });
        });
}

deleteTodo = (req, res) => {
    const id = req.params.id;
    Todo.findByIdAndRemove(id)
        .then((data) => {
            if (!data) {
                res.status(404).json({
                    message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
            } else {
                res.json({
                   message: 'Todo was deleted successfully!'
                });
            }
        })
        .catch(error => {
            res.status(500).json({
                error,
                message: 'Could not delete Tutorial with id=' + id
            });
        })
}

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
}

// referred source
// "controllers" : https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66
// ".clone()" : https://stackoverflow.com/questions/68945315/mongooseerror-query-was-already-executed