import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import userModel from '../models/User';
// import 'dotenv/config';
import keys from '../config/keys';

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await userModel.findById(id);
    done(null, user);
});

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GoogleClientID,
            clientSecret: process.env.GoogleClientSecret,
            callbackURL: '/auth/google/callback',
        },
        async (accessToken, refreshToken, profile, done) => {
            const user = await userModel.findOne({ googleId: profile.id });

            if (!user) {
                const newUser = await userModel.create({ googleId: profile.id });
                done(null, newUser);
            } else {
                done(null, user);
            }
        }
    )
);
