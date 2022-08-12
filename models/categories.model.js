const db = require('mongoose')

let itemsSchema = new db.Schema({
	name: { type: String, required: true }
})

module.exports = db.model('items', itemsSchema)
