const db = require('mongoose')

let categorySchema = new db.Schema({
	name: { type: String, required: true }
})

/**
 * ### Categories Model
 */
module.exports = db.model('categories', categorySchema)
