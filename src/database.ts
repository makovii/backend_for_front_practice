import * as env from 'env-var';
import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(env.get('MONGO_URL').required().asString(), {});

const connection = mongoose.connection;
connection.on('connected', function () {
  console.log('Database connected')
});

connection.on('disconnected', function () {
  console.log('MongoDB disconnected ')
});

connection.on('error', console.error.bind(console));

export { connection };
