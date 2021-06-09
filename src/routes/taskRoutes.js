const express = require('express');
const router = express.Router();
const task_controller = require('../controllers/taskController');

router.get('/', task_controller.index_get);
router.post('/', task_controller.index_post);

module.exports = router;
