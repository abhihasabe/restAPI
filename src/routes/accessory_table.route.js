//accessory_table
const express = require('express');
const router = express.Router();

const accessory_tablesController = require('../controllers/accessory_table.controller');

// get all accessory_table
router.get('/', accessory_tablesController.accessory_tablesList);

// get accessory_table by ID
router.get('/:id',accessory_tablesController.getaccessory_tableByID);

// create new accessory_table
router.post('/', accessory_tablesController.createNewaccessory_table);

// update accessory_table
router.put('/:id', accessory_tablesController.updateaccessory_table);

// delete accessory_table
router.delete('/:id',accessory_tablesController.deleteaccessory_table);

module.exports = router;