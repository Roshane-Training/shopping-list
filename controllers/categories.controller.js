const categoriesModel = require('../models/categories.model')
const { JSONResponse } = require('../lib/helper')

class CategoriesController {
	/**
	 * ### Description
	 * Get all items
	 */
	static getAllCategories(req, res) {
		categoriesModel
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
				JSONResponse.error(
					res,
					'Fatal error accessing database.',
					error,
					500
				)
			})
	}

	/**
	 * ### Description
	 * Create a category
	 */
	static createCategory(req, res) {
		let body = req.body
		new categoriesModel(body)
			.save()
			.then((result) => {
				if (result)
					JSONResponse.success(
						res,
						'Success creating category.',
						result,
						200
					)
				else
					JSONResponse.error(
						res,
						'Failure creating category.',
						new Error('Document not successfully created, assess model.'),
						409
					)
			})
			.catch((error) => {
				JSONResponse.error(
					res,
					'Fatal error accessing database.',
					error,
					500
				)
			})
	}

	/**
	 * ### Description
	 * Update a category
	 */
	static updateCategory(req, res) {
		let body = req.body
		let id = req.params.id
		categoriesModel
			.findByIdAndUpdate(id, body)
			.then((result) => {
				if (result)
					JSONResponse.success(res, 'Success.', result, 200)
				else
					JSONResponse.error(
						res,
						'Failure updating category.',
						new Error('Document not successfully updated, assess model.'),
						409
					)
			})
			.catch((error) => {
				JSONResponse.error(
					res,
					'Fatal error accessing database.',
					error,
					500
				)
			})
	}

	/**
	 * ### Description
	 * Delete a category
	 */
	static deleteCategory(req, res) {
		let id = req.params.id
		categoriesModel
			.findByIdAndDelete(id)
			.then((result) => {
				if (result)
					JSONResponse.success(
						res,
						'Successfully deleted category.',
						result,
						200
					)
				else
					JSONResponse.error(
						res,
						'Failure deleting category.',
						new Error('Document not successfully deleted, assess model.'),
						409
					)
			})
			.catch((error) => {
				JSONResponse.error(res, 'Failure deleting category.', error, 500)
			})
		JSONResponse.success(res, 'Success.', category, 200)
	}
}

module.exports = CategoriesController
