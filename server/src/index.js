import express from 'express';
import router from './router';
import mongoose from 'mongoose';
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

app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server started');
});
