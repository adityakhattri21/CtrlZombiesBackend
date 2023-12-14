const express = require("express")
const { createEvents } = require("../controllers/eventController")
const router = express.Router()

router.post('/',createEvents)

module.exports = router