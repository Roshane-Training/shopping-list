const db = require("../app")

let itemsSchema = new db.Schema({
   category: {type: String, required: true},
   price: {type: Number, required: true},
   amount: {type: Number, required: true}
})

module.exports = db.model("items", itemsSchema)