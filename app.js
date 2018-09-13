const express = require('express');
const app = express();
const port = process.env.PORT;
const queries = require('./queries');
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(cors());

app.listen(3000,() => console.log('listening on ${port}'));

app.get('/',(req, res) => {
    queries.getAll().then(result => { res.send({data: result})})
});
app.get('/:id',(req,res) => {
    queries.soloStudent(req.params.id).then(result => {res.json({data: result})})
})
app.post('/',(req,res) => {
    queries.createStudent().then(data => res.json(data))
    console.log(req.body)
    res.send('🐉')
})

