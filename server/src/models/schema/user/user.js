import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  username: String
});

export default userSchema;
