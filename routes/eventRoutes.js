const express = require("express")
const { createEvents, getAllEvents, updateVolunteer } = require("../controllers/eventController")
const router = express.Router()

router.post('/',createEvents)
router.get("/:villageName",getAllEvents)
router.patch("/volunteer",updateVolunteer)

module.exports = router