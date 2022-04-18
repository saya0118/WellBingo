const express = require('express');

const TodoCtrl = require('../controllers/todo-controller');

const router = express.Router();

router.get('/todos', TodoCtrl.getTodos);
router.put('/todos', TodoCtrl.editTodos);
router.post('/todos', TodoCtrl.updateTodos);
router.delete('/todos', TodoCtrl.deleteTodos);

module.exports = router;