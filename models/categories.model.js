const db = require("../app")

let categoriesSchema = new db.Schema({
   name: {type: String, required: true}
})

module.exports = db.model("categories", categoriesSchema)