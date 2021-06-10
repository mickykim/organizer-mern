const Task = require('../models/Task');
const { body } = require('express-validator');

exports.getTasks = function (req, res) {
    Task.find({}, function (err, Tasks) {
        if (err) {
            res.send(err);
        }
        res.json(Tasks);
    });
};

exports.addNewTask = function (req, res) {
    //! Need to add validation and sanitization of inputs
    let newTask = new Task(req.body);

    newTask.save(function (err, savedTask) {
        if (err) {
            res.send(err);
        }

        res.json(savedTask);
    });
};

exports.getTaskWithID = function (req, res) {
    Task.findById(req.params.id, function (err, foundTask) {
        if (err) {
            res.send(err);
        }

        res.json(foundTask);
    });
};

exports.updateTask = function (req, res) {
    //! Need to add validation and sanitization of inputs
    Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        function (err, updatedTask) {
            if (err) {
                res.send(err);
            }

            res.json(updatedTask);
        }
    );
};

exports.deleteTask = function (req, res) {
    Task.findByIdAndDelete(req.params.id, function (err) {
        if (err) {
            res.send(err);
        }

        res.json({ message: 'Task successfully deleted' });
    });
};
