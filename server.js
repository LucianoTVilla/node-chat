const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');
const db = require('./db')

var app = express();
app.use(bodyParser.json());
router(app);
db(/*database*/)

app.use('/app', express.static('public'));

app.listen(3000);
console.log('App running on port 3000');
