//addtask
const express = require('express');
const router = express.Router();

const addtasksController = require('../controllers/addtask.controller');

// get all addtask
router.get('/', addtasksController.addtasksList);

// get addtask by ID
router.get('/:id',addtasksController.getaddtaskByID);

// create new addtask
router.post('/', addtasksController.createNewaddtask);

// update addtask
router.put('/:id', addtasksController.updateaddtask);

// delete addtask
router.delete('/:id',addtasksController.deleteaddtask);

module.exports = router;