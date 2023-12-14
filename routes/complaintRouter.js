const express = require("express")
const { getAllComplaints, addComplaints, getUserComplaints } = require("../controllers/complaintController")
const router = express.Router()

router.get("/user/:userid",getUserComplaints)
router.post("/",addComplaints)
router.get("/:villageName", getAllComplaints)

module.exports = router