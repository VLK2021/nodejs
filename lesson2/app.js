// const express = require('express');
// const expressHandlebars = require('express-handlebars');
// const path = require('path');
//
// const app = express();
//
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());
//
//
// app.use(express.static(path.join(process.cwd(), 'views')));
//
//
// app.set('view engine', '.hbs');
// app.engine('.hbs', expressHandlebars({
//     defaultLayout: false
// }));
// app.set('view', path.join(process.cwd(), 'views'));
//
//
//
//
// app.get('/', (req, res) => {
//     // res.write('dasfsdf');
//     res.end('ALL RIGHT');
//     // res.json('from json');
//     // res.status(403).end('sdc');
//     // res.sendStatus(400);
// })
//
// app.get('/users', (req, res) => {
//     res.json([
//         {name: 'Volodya'},
//         {name: 'Valya'}
//     ])
// })
//
// app.post('/users', (req, res) => {
//     console.log(req.body);
//
//     res.end('user created');
// })
//
//
//
//
//
// app.listen(5000, (err) => {
//     if (err) {
//         console.log(err);
//     }
//
//     console.log('Server is started on 5000');
// })


const express = require('express');
const expressHandlebars = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'views')));


app.engine('.hbs', expressHandlebars({
    defaultLayout: false
}));
app.set('view engine', '.hbs');
app.set('views', path.join(process.cwd(), 'views'));


app.get('/', (req, res) => {
    // res.write('dasfsdf');
    // res.end('ALL RIGHT');
    // res.json('from json');
    // res.status(403).end('sdc');
    // res.sendStatus(400);
    console.log('Received GET request for /');

    res.render('main')
});

app.get('/users', (req, res) => {
    console.log('Received GET request for /users');

    res.json([
        {name: 'Volodya'},
        {name: 'Valya'}
    ]);
});

app.post('/users', (req, res) => {
    console.log('Received POST request for /users');

    console.log(req.body);
    res.end('user created');
});

app.listen(5000, (err) => {
    if (err) {
        console.log(err);
    }

    console.log('Server is started on 5000');
});
