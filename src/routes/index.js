const express = require('express')
const messageRoutes = require('./message.js')
const userRoutes = require('./user.js')
const catRoutes = require('./cat.js')

const router = express.Router()

router.use('/messages', messageRoutes)
router.use('/users', userRoutes)
router.use('/cats', catRoutes)

module.exports = router
