const { getAllProducts, addProducts } = require('../controllers/productController')

const express = require('express')

const router = express.Router()
router.get("/:villageName",getAllProducts)
router.post("/",addProducts)

module.exports = router