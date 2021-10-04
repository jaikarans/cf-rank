const express = require('express');
const mongoose = require('mongoose');
const env = require('./config/env');

const app = express();

app.use(express.json());

mongoose.connect(
  `mongodb+srv://${env.MONGO_USER_NAME}:${env.MONGO_PASSWORD}@${env.MONGO_CLUSTER_NAME}.mongodb.net/${env.DATABASE}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('Connected successfully');
});

app.listen(env.PORT, () => {
  console.log(`Server is running at port ${env.PORT}`);
});
