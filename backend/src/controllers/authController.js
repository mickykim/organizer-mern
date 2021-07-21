import passport from 'passport';
import jwt from 'jsonwebtoken';
import keys from '../../config/keys.js';
import * as utils from '../../lib/utils.js';

export const registerUser = [
    passport.authenticate('register', { session: false }),
    (req, res, next) => {
        if (req.user) {
            res.json({
                success: true,
                message: 'User registered',
                user: req.user,
                redirectUrl: '/login',
            });
        }
    },
];

export const loginUser = [
    passport.authenticate('login', { session: false }),
    (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                redirectUrl: '/login',
            });
        }
        const tokenObject = utils.issueJWT(req.user);

        return res.status(200).json({
            success: true,
            token: tokenObject.token,
            expiresIn: tokenObject.expiresIn,
            redirectUrl: '/',
        });
    },
];
// export const loginUser = (req, res, next) => {
//     passport.authenticate('login', (err, user, info) => {
//         if (err) {
//             return next(err);
//         }

//         if (!user) {
//             return res.redirect('/login');
//         }
//         const tokenObject = utils.issueJWT(user);

//         return res.status(200).json({
//             success: true,
//             token: tokenObject.token,
//             expires: tokenObject.expiresIn,
//         });
//     });
// };
