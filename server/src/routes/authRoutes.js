import * as express from 'express';
import passport from 'passport';

const authRouter = express.Router();

authRouter.get(
    '/google',
    passport.authenticate('google', {
        scope: ['profile', 'email'],
    })
);

authRouter.get('/google/callback', passport.authenticate('google'));

authRouter.get('/logout', (req, res) => {
    req.logOut();
});

authRouter.get('/current_user', (req, res) => {
    res.send(req.user);
});

export default authRouter;
