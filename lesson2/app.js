const express = require('express');

const app = express();


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





app.listen(5000, (err) => {
    if (err) {
        console.log(err);
    }

    console.log('Server is started on 5000');
})