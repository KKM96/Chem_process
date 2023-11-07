import { MongoClient } from 'mongodb';
require('dotenv').config();

const url = process.env.MongoDB_URL;

let connectDB;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url).connect();
  console.log('MongoDB 연결완료');
}

export { connectDB };