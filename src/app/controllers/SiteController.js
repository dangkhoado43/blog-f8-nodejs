const Course = require('../models/Course');
const mongoose = require('../../util');

class SiteController {
    // [GET] /
    async index(req, res, next) {
        // Callback
        try {
            const courses = await Course.find({});
            res.render('home', {
                courses: mongoose.multipleMongooseToObject(courses),
            });

            // res.json(courses);
        } catch (error) {
            // res.status(400).json({ error: 'Error!' });
            next(error);
        }

        // Promise
        // lean() truy vấn dữ liệu từ cơ sở dữ liệu mà không tạo đối tượng Mongoose Document.
        // .lean(), kết quả trả về là các đối tượng JavaScript thuần túy (plain JavaScript objects) thay vì đối tượng Mongoose Document.
        // Course.find({})
        //     .lean()
        //     .then(function (courses) {
        //         res.json(courses);
        //     })
        //     .catch(function (error) {
        //         // console.error(error);
        //         next(error);
        //     });
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
