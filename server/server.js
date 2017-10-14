const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pg = require('pg');

// Set up the express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, '../build')));

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

app.get('/api/query',  (req, res) => {
    const uri = 'postgres://player:1234@localhost/sqlgame';
    // connection to the local database
    pg.connect(uri, (err, db) => {
        if (err) throw new Error(err);
        console.log("connected to db");
        //   make SQL queries
        // console.log(req.query.query)
        db.query((req.query.query), (err, result) => {
            // console.log('1')
            if (err) throw new Error(err);
            console.log("result", result.rows);
            res.send(result)
            db.end();
        });
    });
})


app.listen(8080);
console.log('Listening on port 8080');