import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({
  title: String, 
  body: String,
});

export default postSchema;
