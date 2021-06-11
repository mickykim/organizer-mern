const express = require('express');
const router = express.Router();

const task_controller = require('../controllers/taskController');

router.get('/', function (req, res) {
    res.redirect('/tasks');
});

module.exports = router;
