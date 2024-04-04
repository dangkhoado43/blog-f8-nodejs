const Course = require('../models/Course');
const mongoose = require('../../util');

class UserController {
    // [GET] /user/courses
    async courses(req, res, next) {
        try {
            const courses = await Course.find({});
            res.render('user/courses', {
                courses: mongoose.multipleMongooseToObject(courses),
            });
        } catch (error) {
            next(error);
        }
    }

    async blogs(req, res, next) {
        try {
            const courses = await Course.find({});
            res.render('user/blogs', {
                courses: mongoose.multipleMongooseToObject(courses),
            });
        } catch (error) {
            next(error);
        }
    }

    // [GET] /user/:slug
    show(req, res) {
        res.send('Blog DETAILS !!!');
    }
}

module.exports = new UserController();
