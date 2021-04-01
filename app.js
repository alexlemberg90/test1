const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const mainRouter = require('./routers/main.router');

const app = express();

_connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

app.use('/', mainRouter);

app.listen(5555, () => {
  console.log('start port 5555');
});

function _connectDB() {
  mongoose.connect('mongodb://localhost:27017/usersDB', { useNewUrlParser: true, useUnifiedTopology: true });

  const { connection } = mongoose;

  connection.on('error', (error) => {
    console.log(error);
  });
}
