const express = require('express')
const {registerUsers,currentUser,loginUser} = require('../controllers/userController')
const validateToken = require('../middleware/validateToken')
const router = express.Router()


router.post('/register',registerUsers)

router.post('/login',loginUser)

router.get('/current',validateToken,currentUser)


module.exports = router