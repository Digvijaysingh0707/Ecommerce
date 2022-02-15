const express = require('express')
const { getAllProducts } = require('../controller/productConttroller')
const router = express.Router()

router.route('/products').get(getAllProducts)

module.exports = router
