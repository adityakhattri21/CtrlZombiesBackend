const { getAllJobs, addJobs } = require('../controllers/employmentController')
const {  } = require('../controllers/productController')

const express = require('express')

const router = express.Router()
router.get("/:villageName",getAllJobs)
router.post("/",addJobs)

module.exports = router