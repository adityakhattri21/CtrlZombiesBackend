const express = require("express")
const { getAllComplaints, addComplaints, getUserComplaints } = require("../controllers/complaintController")
const router = express.Router()

router.get("/user/:userId",getUserComplaints)
router.post("/",addComplaints)
router.get("/:villageName", getAllComplaints)

module.exports = router