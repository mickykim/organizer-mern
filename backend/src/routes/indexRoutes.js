import express from 'express';
import * as authController from '../controllers/authController.js';
const router = express.Router();

router.get('/', function (req, res) {
    res.redirect('/tasks');
});

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

export default router;
