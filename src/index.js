// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
'use strict';


const path = require('path');
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars').engine
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, './public')))
app.use('/css', express.static(path.join(__dirname, './node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, './node_modules/bootstrap/dist/js')))

// HTTP logger
app.use(morgan('combined'))

// default layout is main
// extension of file is .hbs
app.engine('.hbs', handlebars(
  {
    defaultLayout: 'main',
    extname: '.hbs',
    encoding: 'utf8',
    // layoutsDir: path.join(__dirname, './resources/views/layouts'),
    // partialsDir: path.join(__dirname, './resources/views/partials')
  }
));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, './resources/views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

// IP: 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})