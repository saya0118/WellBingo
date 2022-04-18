const express = require('express');

const TodoCtrl = require('../controllers/todo-controller');

const router = express.Router();

router.get('/todos', TodoCtrl.getTodos);
router.put('/edit-todos:id', TodoCtrl.editTodos);
router.post('/update-todos:id', TodoCtrl.updateTodos);
router.delete('/delete-todos:id', TodoCtrl.deleteTodos);

module.exports = router;