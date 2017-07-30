'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const port = process.env || 5000;

const app = express();

let conString = process.env.PG_PASSWORD;
const client = new pg.client(conString);
client.connect();
client.on('error', err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./public'));

app.listen(5000, ()=> {
  console.log('Server up on Port: 5000');
});