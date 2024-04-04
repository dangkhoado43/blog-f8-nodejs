const siteRouter = require('./site');
const userRouter = require('./user');
const coursesRouter = require('./courses');
const blogRouter = require('./blog');

function route(app) {
    app.use('/user', userRouter);
    app.use('/courses', coursesRouter);

    app.use('/blog', blogRouter);

    app.use('/', siteRouter);

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
