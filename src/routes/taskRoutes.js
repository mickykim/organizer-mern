const express = require('express');
const router = express.Router();
const task_controller = require('../controllers/taskController');

router.get('/', task_controller.getTasks);
router.post('/', task_controller.addNewTask);
router.get('/:id', task_controller.getTaskWithID);
router.put('/:id', task_controller.updateTask);
router.delete('/:id', task_controller.deleteTask);

module.exports = router;
