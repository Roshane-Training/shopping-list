const express = require('express')
const router = express.Router()
const IndexController = require('../controllers/index.controller')
const {
	createItem,
	deleteItemsById,
	getAllItems,
} = require('../controllers/items.controller')
const { JSONResponse } = require('../lib/helper')

router.route('/').get(IndexController.index)

router.route('/shopping_list').post(createItem).get(getAllItems)

router.route('/shopping_list/:id').delete(deleteItemsById)

router.route('/categories').get((req, res) => {
	require('../models/categories.model')
		.find()
		.then((results) => {
			if (results.length > 0)
				JSONResponse.success(
					res,
					'Successfully collected categories.',
					results,
					200
				)
			else
				JSONResponse.error(
					res,
					'No categories found.',
					new Error(
						"Access to collection 'categories', yeilded no results."
					),
					404
				)
		})
		.catch((error) => {
			JSONResponse.error(res, "Fatal error accessing database.", error, 500)
		})
})

module.exports = router
