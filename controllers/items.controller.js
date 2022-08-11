const Items = require('../models/items.model');


/**
 * ### Description 
 * Get all items 
 */
 exports.getAllItems = async (req, res) => {
    try{
        const items = await Items.find();
        res.status(200).json({
            status: 'success',
            results: items.length,
            data: {
              items
            }
        });
    }catch(error){res.json(error)}   
}

/**
 * ### Description 
 * Creating an item
 */
exports.createItem = async (req,res) => {
    try{
        const items = await Items.create(req.body);
        res.status(200).json({
            status: 'success',
            results: items.length,
            data: {
              items
            }
        });
    }catch(error){res.json(error)}
}

/**
 * ### Description 
 * Deleting items from list
 */
exports.deleteItemsById = async (req,res) => {
    try{
        const item = await Items.findById(req.params.id)
        await Items.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: 'success',
            data: {
                item
            }
        });
    }catch(error){
        res.json({error: error})
    }
}