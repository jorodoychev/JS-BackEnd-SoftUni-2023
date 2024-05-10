const router = require('express').Router()
const courseService = require('../services/courseService.js')
const {getErrorMessage} = require('../utils/errorHandler.js')
const {isAuth} = require('../middlewares/authMiddleware.js')

router.get('/', async (req, res) => {
    const courses = await courseService.getAll().lean()

    res.render('courses', {courses: courses})
})

router.get('/create', isAuth, (req, res) => {
    res.render('courses/create')
})

router.post('/create', isAuth, async (req, res) => {
    try {
        const courseData = await courseService.create({
            ...req.body,
            owner: req.user._id,
        })
        res.redirect('/courses')
    } catch (e) {
        res.render('courses/create', {error: getErrorMessage(e)})
    }
})

router.get('/details/:courseId', async (req, res) => {
    const courseId = req.params.courseId
    try {
        const course = await courseService.getSingle(courseId).lean()
        const isOwner = req.user?._id == course.owner._id
        const isSignUp = course.signUpList.some((x) => x.user == req.user?._id)
        res.render('courses/details', {course: course, isOwner, isSignUp})
    } catch (e) {
        res.render('404')
    }
})

router.get('/details/:courseId/delete', isAuth, async (req, res) => {
    const courseId = req.params.courseId

    try {
        const course = await courseService.getSingle(courseId).lean()
        if (req.user._id == course.owner._id) {
            await courseService.delete(courseId)
            res.redirect('/courses')
        } else {
            res.redirect('/404')
        }
    } catch (e) {
        res.render(`/courses/details/${courseId}`, {
            error: 'Unsuccessfully attempt to delete the course!',
        })
    }
})

router.get('/details/:courseId/edit', isAuth, async (req, res) => {
    const courseId = req.params.courseId

    try {
        const course = await courseService.getSingle(courseId).lean()
        if (req.user._id == course.owner._id) {
            res.render('courses/edit', {course: course})
        } else {
            res.redirect('/404')
        }
    } catch (e) {
        res.render('courses/edit', {error: getErrorMessage(e)})
    }
})

router.post('/details/:courseId/edit', isAuth, async (req, res) => {
    const courseId = req.params.courseId
    const course = req.body

    try {
        const updatedCourse = await courseService.update(courseId, course)
        updatedCourse.save()
        res.redirect(`/courses/details/${courseId}`)
    } catch (e) {
        res.render('courses/edit', {course: course, error: getErrorMessage(e)})
    }
})

router.get('/details/:courseId/signUp', isAuth, async (req, res) => {
    const courseId = req.params.courseId
    const user = req.user._id
    try {
        const course = await courseService.getSingle(courseId).lean()

        if (course.owner._id == user) {
            res.redirect(`/courses/details/${courseId}`)
        } else {
            await courseService.signUp(courseId, {user})
            res.redirect(`/courses/details/${courseId}`)
        }
    } catch (e) {

        res.render('courses/details', {error: getErrorMessage(e)})
    }
})

module.exports = router
