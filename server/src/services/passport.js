import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import userModel from '../models/User';
import 'dotenv/config';

passport.use(
    new GoogleStrategy(
        {
            clientID: '708797754687-qqj35citd5lsj5o3sd9hcokmrcfbab9j.apps.googleusercontent.com',
            clientSecret: 'AIeDuY6j1N0HoYC9dTNLZo1l',
            callbackURL: '/auth/google/callback',
        },
        async (accessToken, refreshToken, profile, done) => {
            await userModel.create({ googleId: profile.id });
            console.log(profile.id);
        }
    )
);
