import Task from '../models/Task.js';
import { body } from 'express-validator';

export const getTasks = function (req, res) {
    Task.find({}, function (err, Tasks) {
        if (err) {
            res.send(err);
        }
        res.json(Tasks);
    });
};

export const addNewTask = function (req, res) {
    //! Need to add validation and sanitization of inputs
    let newTask = new Task(req.body);

    newTask.save(function (err, savedTask) {
        if (err) {
            res.send(err);
        }

        res.json(savedTask);
    });
};

export const getTaskWithID = function (req, res) {
    Task.findById(req.params.id, function (err, foundTask) {
        if (err) {
            res.send(err);
        }

        res.json(foundTask);
    });
};

export const updateTask = function (req, res) {
    //! Need to add validation and sanitization of inputs
    Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        // https://mongoosejs.com/docs/validation.html#update-validators
        { new: true, runValidators: true },
        function (err, updatedTask) {
            if (err) {
                res.send(err);
            }

            res.json(updatedTask);
        }
    );
};

export const deleteTask = function (req, res) {
    Task.findByIdAndDelete(req.params.id, function (err) {
        if (err) {
            res.send(err);
        }

        res.json({ message: 'Task successfully deleted' });
    });
};
