'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const port = process.env || 5000;

const app = express();

let conString = process.env.PG_PASSWORD;
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./public'));

app.get('/new',(req, res) => res.sendFile('new.html', {root: './public'}));

app.get('/cities',(req, res) => {
  client.query('SELECT * FROM cities')
  .then(function(result) {
    res.send(result.row);
  })
  .catch(function(err) {
    console.error(err);
  });
});

app.post('/cities', (req, res) => {
  client.query(`
  INSERT INTO
    cities(date, category, city, inspiration, body, author)
    VALUES ($1, $2, $3, $4, $5, $6);
    `,
    [
      req.body.date,
      req.body.category,
      req.body.city,
      req.body.inspiration,
      req.body.body,
      req.body.author
    ]
  )
  .then(() => {
    res.send('insert complete');
  })  
    .catch((err) => {
      console.error(err);  
    });
});

app.put('/cities/id:', (req, res) => {
  client.query(`
  UPDATE cities
  SET
    date=$1, category=$2, city=$3, inspiration=$4, body=$5, author=$6
    WHERE city_id=$7;
    `,
    [
      req.body.date,
      req.body.category,
      req.body.city,
      req.body.inspiration,
      req.body.body,
      req.body.author,
      req.params.id
    ]
  )
  .then(() => {
    res.send('update complete');
  })  
    .catch((err) => {
      console.error(err);  
    });
});

app.delete('/cities/:id', (req, res) => {
  client.query(`
  DELETE FROM cities WHERE cities_id=$3;`,
  [req.params.id]
  )
  .then(() => {
    res.send('delete complete');
  })
  .catch((err) => {
    console.error(err);
  });
});

app.delete('/cities', (req, res) => {
  client.query(`
  DELETE FROM cities;`
  )
  .then(() => {
    res.send('delete complete');
  })
  .catch((err) => {
    console.error(err);
  });
});

loadDB();


app.listen(5000, ()=> {
  console.log('Server up on Port: 5000');
});

function loadCities() {
  client.query('SELECT COUNT(*) FROM cities')
  .then((result) => {
    if(!parseInt(result.rows[0].count)){
      fs.readFile('./public/contents/contents.json', (err, fd) => {
        JSON.parse(fd.toString()).forEach((element) => {
          client.query(`
          INSERT INTO
          cities(date, category, city, inspiration, body, author)
          VALUES ($1, $2, $3, $4, $5, $6);
          `,
            [
              element.body.date,
              element.body.category,
              element.body.city,
              element.body.inspiration,
              element.body.body,
              element.body.author
            ]
          );
        });
      });
    }
  });
}

function loadDB() {
  client.query(`
   CREATE TABLE IF NOT EXISTS cities (
     cities_id SERIAL PRIMARY KEY,
     date DATE,
     category VARCHAR (255) NOT NULL,
     city VARCHAR (255) NOT NULL,
     inspiration VARCHAR (255) NOT NULL,
     body TEXT NOT NULL,
     author TEXT);
  `)
  .then(() => {
    loadCities();
  })
  .catch((err) => {
    console.error(err);
  });
}