const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
let pg = require('pg');

// Set up the express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '../build')));


const uri='postgres://iexsauup:1tWt0Au0dYbAAC63zJNqm6ZQbrUo5bs8@elmer.db.elephantsql.com:5432/iexsauup';
const client = new pg.Client(uri);


client.connect(function(err, client, done) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }

    //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
    client.end();
  });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + './../build/index.html'));
});


app.listen(8080);
console.log('Listening on port 8080');