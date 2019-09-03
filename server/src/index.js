import express from 'express';
import router from './router';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';
import 'dotenv/config';
import './services/passport';

mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
    },
    (err) => {
        if (err) {
            throw err;
        }
        console.log('Mongo Connected')
    }
);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [process.env.cookieKey],
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server started');
});
