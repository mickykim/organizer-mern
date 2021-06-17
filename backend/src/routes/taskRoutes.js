import express from 'express';
import * as task_controller from '../controllers/taskController.js';

const router = express.Router();

router.get('/', task_controller.getTasks);
router.post('/', task_controller.addNewTask);
router.get('/:id', task_controller.getTaskWithID);
router.put('/:id', task_controller.updateTask);
router.delete('/:id', task_controller.deleteTask);

export default router;
