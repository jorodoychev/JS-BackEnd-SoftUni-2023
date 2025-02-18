const router = require('express').Router()
const userService = require('../services/userService.js')
const {getErrorMessage} = require('../utils/errorHandler.js')

router.get('/login', (req, res) => {
    res.render('users/login')
})

router.post('/login', async (req, res) => {
    const {email, password} = req.body
    try {
        const token = await userService.login(email, password)

        res.cookie('token', token)
        res.redirect('/')
    } catch (e) {
        res.render('users/login', {error: getErrorMessage(e)})
    }
})

router.get('/register', (req, res) => {
    res.render('users/register')
})

router.post('/register', async (req, res) => {
    const userData = req.body
    try {
        const token = await userService.register(userData)
        res.cookie('token', token)
        res.redirect('/')
    } catch (e) {
        res.render('users/register', {error: getErrorMessage(e)})
    }
})

router.get('/logout', (req, res) => {
    res.clearCookie('token')
    res.redirect('/')
})

module.exports = router
