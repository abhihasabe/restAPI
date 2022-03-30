const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller');

// get all employees
router.get('/getEmployees', employeeController.getEmployeeList);

// get employee by ID
router.get('/getEmployee/:id', employeeController.getEmployeeByID);

// create new employee
router.post('/createEmployee', employeeController.createNewEmployee);

// update employee
router.put('/updateEmployee/:id', employeeController.updateEmployee);

// delete employee
router.delete('/deleteEmpoyee/:id',employeeController.deleteEmployee);

module.exports = router;