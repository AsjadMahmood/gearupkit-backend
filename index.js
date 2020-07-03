// app.js

const express = require('express');
const bodyParser = require('body-parser');

const user = require('./routes/user.route'); // Imports routes for the users
const app = express();

cors = require('cors');
app.use(cors());

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/gearupkit';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', user);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});