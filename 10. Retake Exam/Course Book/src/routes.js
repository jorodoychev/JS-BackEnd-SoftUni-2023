const router = require('express').Router()

const homeController = require('./controllers/homeController.js')
const userController = require('./controllers/userController.js')
const courseController = require('./controllers/courseController.js')

router.use(homeController)
router.use('/users', userController)
router.use('/courses', courseController)
router.get('*', (req, res) => {
    res.redirect('/404')
})

module.exports = router
