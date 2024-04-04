// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
'use strict';

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars').engine;

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
// app.use('/public/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')))
// app.use('/node_modules/bootstrap/dist/css', express.static(path.join(__dirname, './node_modules/bootstrap/dist/css')))
// app.use('/node_modules/bootstrap/dist/js', express.static(path.join(__dirname, './node_modules/bootstrap/dist/js')))

// Middleware
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());
// XMLHttpRequest, fetch, axios, ...

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// HTTP logger
// app.use(morgan('combined'))

// default layout is main
// extension of file is .hbs
app.engine(
    'hbs',
    handlebars({
        defaultLayout: 'main',
        extname: '.hbs',
        encoding: 'utf8',
        helpers: {
            sum: (a, b) => a + b,
        },
        // layoutsDir: path.join(__dirname, 'resources', 'views', 'layouts'),
        // partialsDir: path.join(__dirname, 'resources', 'views', 'partials')
    })
);

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

// Localhost --- Hosting
// IP: 127.0.0.1 - localhost
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
