const express = require('express')
const app = express()
const port = 3000

const people = [
    "Jeff Bezos",
    "Elon Musk",
    "Bill Gates",
    "Paulo Lemann"
]

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