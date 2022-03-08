const expresss = require('express')
const router = expresss.Router()

const login = require('./login.router')
const register = require('./register.router')

router.use('/login', login)
router.use('/register', register)

module.exports = router
