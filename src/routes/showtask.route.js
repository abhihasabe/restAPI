//showtask
const express = require('express');
const router = express.Router();

const showtasksController = require('../controllers/showtask.controller');

// get all showtask
router.get('/', showtasksController.showtasksList);

// get showtask by ID
router.get('/:id',showtasksController.getshowtaskByID);

// create new showtask
router.post('/', showtasksController.createNewshowtask);

// update showtask
router.put('/:id', showtasksController.updateshowtask);

// delete showtask
router.delete('/:id',showtasksController.deleteshowtask);

module.exports = router;