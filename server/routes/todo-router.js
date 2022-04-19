const express = require('express');

const TodoCtrl = require('../controllers/todo-controller');

const router = express.Router();

router.get('/todos', TodoCtrl.getTodos);
router.post('/add-todos', TodoCtrl.addTodos);
router.put('/update-todos/:id', TodoCtrl.updateTodos);
router.delete('/delete-todos/:id', TodoCtrl.deleteTodos);

module.exports = router;