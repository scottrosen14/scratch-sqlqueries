const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pg = require('pg');

// Set up the express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, '../build')));

// CONNECTION TO THE ELEPHANT
// var conString = 'postgres://iexsauup:1tWt0Au0dYbAAC63zJNqm6ZQbrUo5bs8@elmer.db.elephantsql.com:5432/iexsauup';
// var client = new pg.Client(conString);
// client.connect(function (err, result) {
//     if (err) {
//         return console.error('could not connect to postgres', err);
//     } else {
//         console.log('connected to the db');
//         client.query('SELECT * FROM city;', (err, result) => {
//             if (err) throw new Error(err);
//             console.log("result", result.rows);
//             client.end();
//         });
//     }
// });

// connection to the local db
// steps to local db
//
// const uri = 'postgres://player:1234@localhost/sqlgame';

// pg.connect(uri, (err, db) => {
//   if (err) throw new Error(err);
//   console.log("connected to db");
// //   make SQL queries
//   db.query('SELECT * FROM city;', (err, result) => {
//     if (err) throw new Error(err);
//     console.log("result", result.rows);
//     db.end();
//   });
// });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + './../build/index.html'));
});


app.listen(8080);
console.log('Listening on port 8080');