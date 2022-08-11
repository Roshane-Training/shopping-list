const express = require('express')
const router = express.Router()
const IndexController = require('../controllers/index.controller')
const ItemsController = require('../controllers/items.controller')

router.route('/').get(IndexController.index)

router.route('/shopping_list')
.post(ItemsController.createItem)
.get(ItemsController.getAllItems);

router.route('/shopping_list/:id')
.delete(ItemsController.deleteItemsById);

module.exports = router;
