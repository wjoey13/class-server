const express = require('express');
const app = express();
const port = process.env.PORT;
const queries = require('./queries')

app.listen(3000,() => console.log('listening on ${port}'));

app.get('/',(req, res) => {
    queries.getAll().then(result => { res.json(result)})
});
