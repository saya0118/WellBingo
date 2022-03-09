const express = require('express');

const TodoCtrl = require('../controllers/todo-ctrl');

const router = express.Router();

router.get('/todos', TodoCtrl.getTodos);
router.post('/todo', TodoCtrl.createTodo);

module.exports = router;