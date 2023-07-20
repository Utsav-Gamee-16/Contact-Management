

const express = require('express')
const router = express.Router()
const {getContact,getContactById,createContact,updateContact,deleteContact} = require('../controllers/contactControllers')
const validateToken = require('../middleware/validateToken')

router.use(validateToken)
router.route("/").get(getContact)
router.route("/:id").get(getContactById).put(updateContact)
router.route("/:id").delete(deleteContact)


router.route("/").post(createContact)
//router.route("/:id").put(updateContact)

module.exports = router

