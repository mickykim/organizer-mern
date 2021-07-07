import passport from 'passport';

export const registerUser = [
    passport.authenticate('register', { session: false }),
    (req, res, next) => {
        res.json({
            message: 'User registered',
            user: req.user,
        });
    },
];

export const loginUser = [passport.authenticate('login', { session: false })];
