const siteRouter = require('./site');
const newsRouter = require('./news');

function route(app) {
    // app.use('/contact', siteRouter)

    app.use('/news', newsRouter);

    app.use('/', siteRouter);

    // app.get('/services', (req, res) => {
    //     res.render('services')
    // })

    // app.get('/products', (req, res) => {
    //     res.render('products')
    // })

    // app.get('/search', (req, res) => {
    //     console.log(req.query)
    //     res.render('search')
    // })

    // Action ---> dispatcher ---> Function handler/Controller
    // app.post('/search', (req, res) => {
    //     console.log(req.body.q)
    //     res.render('search')
    // })
}

module.exports = route;
