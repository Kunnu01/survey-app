import { Schema, model } from 'mongoose';

const schema = new Schema({
    googleId: String,
});

const userModel = model('users', schema);

export default userModel;
