    const students = require("../controllers/items.controller");   
    const express = require('express');
    const router = express.Router()

    // Create a new Item
    router.post("/", Items.create);
  
    // Retrieve all Items
    router.get("/", Items.find);
  
    // Delete an Item with id
    router.delete("/:id",Items.deleteItemsById);
  

module.exports = router;