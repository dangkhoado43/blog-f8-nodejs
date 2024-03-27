class SiteController {
    // [GET] /
    index(req, res) {
        res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }

    contact(req, res) {
        res.render('contact');
    }
}

module.exports = new SiteController();
