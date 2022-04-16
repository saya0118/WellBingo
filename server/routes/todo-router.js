const express = require('express');

const TodoCtrl = require('../controllers/todo-controller');

const router = express.Router();

router.get('/todos', TodoCtrl.getTodos);

module.exports = router;