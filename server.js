'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


let app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.listen(5000, ()=> {
  console.log('Server up on Port: 5000');
});