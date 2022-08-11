    // const students = require("../");
    const express = require('express');
    const router = express.Router()

    // Create a new Item
    router.post("/", shopping_list.create);
  
    // Retrieve all Items
    router.get("/", shopping_list.findAll);
  
    // Delete an Item with id
    router.delete("/:id", shopping_list.delete);
  
    // Delte all Items
    router.delete("/", shopping_list.deleteAll);


module.exports = router;