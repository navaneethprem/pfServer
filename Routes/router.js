const express = require('express')
const router = new express.Router()
const userController = require('../Controllers/userController')

// registering API
router.post('/user/register',userController.register)

// export router
module.exports = router