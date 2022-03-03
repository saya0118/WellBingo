const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

let todo = mongoose.model('todos');

router.route('/').get((req, res, next) => {
    todo.find((err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    })
})

module.exports = router;