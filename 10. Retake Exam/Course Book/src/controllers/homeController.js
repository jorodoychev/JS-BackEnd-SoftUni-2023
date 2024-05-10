const courseService = require("../services/courseService");
const router = require('express').Router()

router.get('/', async (req, res) => {
    const courses = await courseService.getAll().lean()
    const filteredCourses = courses.filter((course, index) => index !== 3)
    res.render('home', {courses: filteredCourses})
})


router.get('/404', (req, res) => {
    res.render('404')
})

module.exports = router
