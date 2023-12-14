const express = require("express")
const { createEvents, getAllEvents } = require("../controllers/eventController")
const router = express.Router()

router.post('/',createEvents)
router.get("/:villageName",getAllEvents)

module.exports = router