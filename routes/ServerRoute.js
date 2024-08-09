const express = require('express')
const createContact = require('../controllers/ContactController')
const router = express.Router()



router.post('/createcontact' , createContact)


module.exports = router