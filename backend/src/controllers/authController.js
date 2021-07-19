import passport from 'passport';
import jwt from 'jsonwebtoken';
import keys from '../../config/keys.js';
import utils from '../../lib/utils.js';

export const registerUser = [
    passport.authenticate('register', { session: false }),
    (req, res, next) => {
        res.json({
            message: 'User registered',
            user: req.user,
        });
    },
];

export const loginUser = (req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
        if (err) {
            return next(err);
        }

        if (!user) {
            return res.redirect('/login');
        }
        const tokenObject = utils.issueJWT(user);

        return res.status(200).json({
            success: true,
            token: tokenObject.token,
            expires: tokenObject.expiresIn,
        });
    });
};

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        return;
    }
    jwt.verify(token, keys.JWT_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    });
};
