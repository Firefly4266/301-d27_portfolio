'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pg = require('pg');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 5000;


const app = express();

let conString = process.env.PG_PASSWORD || 'postgres://johnathon:1234@localhost:5432/johnathon';
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./public'));

app.listen(5000, ()=> {
  console.log('Server up on Port: 5000');
});