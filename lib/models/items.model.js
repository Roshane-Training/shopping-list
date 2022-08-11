const db = require("../db.js")

let itemsSchema = new db.Schema({
   category: {type: db.Types.ObjectId, required: true, ref: "categories"},
   price: {type: Number, required: true},
   amount: {type: Number, required: true}
})

module.exports = db.model("items", itemsSchema)