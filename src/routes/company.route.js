//company
const express = require('express');
const router = express.Router();

const companysController = require('../controllers/company.controller');

// get all company
router.get('/getCompanys', companysController.getCompanysList);

// get company by ID
router.get('/getCompany/:id',companysController.getCompanyByID);

// create new company
router.post('/addCompany', companysController.createNewCompany);

// update company
router.put('/updateCompany/:id', companysController.updateCompany);

// delete company
router.delete('/deleteCompany/:id',companysController.deleteCompany);

module.exports = router;