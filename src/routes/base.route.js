const express = require('express');
const router = express.Router();

const companysController = require('../controllers/base.controller');

// get All Countrys
router.get('/getCountries',companysController.getCountrys);

// get City By CountryID
router.get('/getCityByCountryID/:id',companysController.getCityByCountryID);

// get all companys Type
router.get('/getcompanytypes', companysController.getCompanysTypeList);

module.exports = router;