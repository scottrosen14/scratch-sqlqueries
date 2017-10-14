const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pg = require('pg');

// Set up the express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '../build')));

// because we're using create react app we have to serve index.html from build file
// I skip playing with proxies but I'll suggest do that because you're spending your time for waiting to npm run build whenever you change something
// on the client side

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + './../build/index.html'));
});


// CONNECTION TO THE ELEPHANT
// app.get('/api/query', (req, res) => {
//     const uri = 'postgres://nbiisnmf:xYQVs7IqALmW8-SIH5O5w6xyCBqmx83e@elmer.db.elephantsql.com:5432/nbiisnmf';
//     var client = new pg.Client(uri);
//     client.connect(function (err, result) {
//         if(err) throw new Error(err);
//         else {
//             console.log('connected to the database');
//             client.query(req.query.query, (err, result) => {
//                 if (err) throw new Error(err);
//                 console.log("result", result.rows);
//                 res.send(result)
//                 client.end();
//             })
//         }
//     })
// })


// we have some issues with connecting to the elephantsql so we're using local database
// when user input query into input box here server servs him response and sending back to him
// it's working on a way that he is sending that query to the database and getting result of that query
app.get('/api/query',  (req, res) => {
    const uri = 'postgres://player:1234@localhost/sqlgame';
    // connection to the local database
    pg.connect(uri, (err, db) => {
        if (err) throw new Error(err);
        console.log("connected to db");
        //   make SQL queries
        db.query((req.query.query), (err, result) => {
            if (err) throw new Error(err);
            console.log("result", result.rows);
            res.send(result)
            db.end();
        });
    });
})


app.listen(8080);
console.log('Listening on port 8080');