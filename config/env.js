const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname, `../${process.env.NODE_ENV}.env`),
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  DATABASE: process.env.DATABASE,
  MONGO_USER_NAME: process.env.MONGO_USER_NAME,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  MONGO_CLUSTER_NAME: process.env.MONGO_CLUSTER_NAME,
  UNIVERSITY_MODEL: process.env.UNIVERSITY_MODEL,
};
