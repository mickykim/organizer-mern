const Task = require('../models/Task');
const { body } = require('express-validator');

exports.index_get = function (req, res, next) {
    res.send('GET Request Successful');
};

exports.index_post = function (req, res, next) {
    //! Need to add validation and sanitization of inputs

    let newTask = new Task(req.body);

    newTask.save(function (err, Task) {
        if (err) {
            res.send(err);
        }

        res.json(Task);
    });
};
