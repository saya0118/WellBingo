const express = require('express');
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
                .json({ success: false, error: `Movie not found` })
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
                message: 'Movie not created!',
            })
        })
}


module.exports = {
    getTodos,
    createTodo,
}

// referred source
// "controllers" : https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66
// ".clone()" : https://stackoverflow.com/questions/68945315/mongooseerror-query-was-already-executed