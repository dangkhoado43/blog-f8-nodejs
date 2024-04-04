const Course = require('../models/Course');
const mongoose = require('../../util');

class CourseController {
    // [GET] /courses
    async index(req, res, next) {
        try {
            const courses = await Course.find({});
            res.render('courses', {
                courses: mongoose.multipleMongooseToObject(courses),
            });
        } catch (error) {
            next(error);
        }
    }

    // [GET] /courses/:slug
    async show(req, res, next) {
        try {
            const course = await Course.findOne({ slug: req.params.slug });
            res.render('courses/show', {
                course: mongoose.mongooseToObject(course),
            });
        } catch (error) {
            next(error);
        }
    }

    // [GET] /courses/create
    async create(req, res, next) {
        try {
            res.render('courses/create');
        } catch (error) {
            next(error);
        }
    }

    // [POST] /courses/store
    async store(req, res, next) {
        try {
            await Course.create({
                name: req.body.name,
                description: req.body.description,
                image: `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`,
                videoId: req.body.videoId,
            });
            res.redirect('/');
        } catch (error) {
            res.status(500).send(error.message);
            next(error);
        }
    }

    // [GET] /courses/:id/edit
    async edit(req, res, next) {
        try {
            const course = await Course.findById(req.params.id);
            res.render('courses/edit', {
                course: mongoose.mongooseToObject(course),
            });
        } catch (error) {
            next(error);
        }
    }

    // [PUT] /courses/:id
    async update(req, res, next) {
        try {
            await Course.updateOne(
                { _id: req.params.id },
                {
                    name: req.body.name,
                    description: req.body.description,
                    image: `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`,
                    videoId: req.body.videoId,
                }
            );
            res.redirect('/user/courses');
        } catch (error) {
            res.status(500).send(error.message);
            next(error);
        }
    }

    // [DELETE] /courses/:id
    async destroy(req, res, next) {
        try {
            await Course.deleteOne({ _id: req.params.id });
            res.redirect('back');
        } catch (error) {
            res.status(500).send(error.message);
            next(error);
        }
    }
}

// GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD
// send request to server and get response from server to client
// post request to server and request server to store data/ create new data
// put request to server and request server to update data - replace document or 1 row of data
// patch request to server and request server to update data - replace 1 field in document or 1 field of 1 row of data
// options used without payload

module.exports = new CourseController();
