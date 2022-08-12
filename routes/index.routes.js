const express = require('express')
const router = express.Router()
const IndexController = require('../controllers/index.controller')
const {
	createItem,
	updateItem,
	deleteItemsById,
	getAllItems,
} = require('../controllers/items.controller')
const {
	createCategory,
	getAllCategories,
	updateCategory,
	deleteCategory
} = require('../controllers/categories.controller')
const { JSONResponse } = require('../lib/helper')

router.route('/').get(IndexController.index)

router.route('/shopping_list').post(createItem).get(getAllItems)

router.route('/shopping_list/:id').patch(updateItem).delete(deleteItemsById)

router.route('/categories').get(getAllCategories).post(createCategory)

router.route('/categories/:id').patch(updateCategory).delete(deleteCategory)

module.exports = router
