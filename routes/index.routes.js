const express = require('express')
const router = express.Router()
const IndexController = require('../controllers/index.controller')

router.route('/').get(IndexController.index)

router.route('/shopping_list')
.post()
.get();

router.route('/shopping_list/:id')
.delete();

router.route('/categories')
.get();

module.exports = router;
