const express = require('express');
const router = express.Router();

const managerController = require('../controllers/manager.controller');

// get all employees
router.get('/', managerController.getEmployeeList);

// get employee by ID
router.get('/:id',managerController.getEmployeeByID);

// create new employee
router.post('/', managerController.createNewEmployee);

// update employee
router.put('/:id', managerController.updateEmployee);

// delete employee
router.delete('/:id',managerController.deleteEmployee);

module.exports = router;