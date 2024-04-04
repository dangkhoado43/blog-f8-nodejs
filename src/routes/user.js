const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

router.get('/courses', userController.courses);
router.get('/blogs', userController.blogs);
router.get('/:slug', userController.show);

module.exports = router;
