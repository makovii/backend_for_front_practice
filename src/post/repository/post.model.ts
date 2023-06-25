import mongoose from 'mongoose';
import { connection } from '../../database';

const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  userId: String,
});


export { postSchema };
export const Post = connection.model('post', postSchema);


