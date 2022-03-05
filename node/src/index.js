const express = require('express')
const mysql = require('mysql');
const app = express()
const port = 3000

var people = [];

const connection = mysql.createConnection({
    host: process.env.PERSISTENCE_HOST,
    user: process.env.PERSISTENCE_USER,
    password: process.env.PERSISTENCE_PASSWORD,
    database: process.env.PERSISTENCE_DATABASE
});

connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM People", function (err, result, fields) {
        if (err) throw err;
        people = result.map(row => row.Name)
    });
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index',
    {
        "title": "Full Cycle Rocks!",
        "people": people
    })
})

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})