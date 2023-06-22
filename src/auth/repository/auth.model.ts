import mongoose from 'mongoose';
import { connection } from '../../database';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});


export { userSchema };
export const Auth = connection.model('auth', userSchema);


