const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.get('/', (req, res) => {
    // res.write('dasfsdf');
    res.end('ALL RIGHT');
    // res.json('from json');
    // res.status(403).end('sdc');
    // res.sendStatus(400);
})

app.get('/users', (req, res) => {
    res.json([
        {name: 'Volodya'},
        {name: 'Valya'}
    ])
})

app.post('/users', (req, res) => {
    console.log(req.body);

    res.end('user created');
})





app.listen(5000, (err) => {
    if (err) {
        console.log(err);
    }

    console.log('Server is started on 5000');
})