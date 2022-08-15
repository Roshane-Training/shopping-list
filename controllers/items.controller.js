const { JSONResponse } = require('../lib/helper')
const Items = require('../models/items.model')

/**
 * ### Description
 * Get all items
 */
exports.getAllItems = async (req, res) => {
	try {
		const items = await Items.find()
		JSONResponse.success(res, 'Success.', items, 200)
	} catch (error) {
		JSONResponse.error(res, 'Failure handling item model.', error, 500)
	}
}

/**
 * ### Description
 * Creating an item
 */
exports.createItem = async (req, res) => {
	try {
		const items = await Items.create(req.body)
		JSONResponse.success(res, 'Success.', items, 200)
	} catch (error) {
		JSONResponse.error(res, 'Failure handling item model.', error, 500)
	}
}

/**
 * ### Description
 * Updating an item
 */
exports.updateItem = async (req, res) => {
	let body = req.body
	let id = req.params.id
	try {
		Items.findByIdAndUpdate(id, body)
			.then((result) => {
				if (result) JSONResponse.success(res, 'Success.', results[0], 200)
				else
					JSONResponse.error(
						res,
						'Failure updating item.',
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
	} catch (error) {
		JSONResponse.error(res, 'Failure handling item model.', error, 500)
	}
}

/**
 * ### Description
 * Deleting items from list
 */
exports.deleteItemsById = async (req, res) => {
	try {
		const item = await Items.findById(req.params.id)
		if (item) await item.delete()
		JSONResponse.success(res, 'Success.', item, 200)
	} catch (error) {
		JSONResponse.error(res, 'Failure handling item model.', error, 500)
	}
}
