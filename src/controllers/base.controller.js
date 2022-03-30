const req = require('express/lib/request');
const CompanyModel = require('../models/base.model');

// get countrys
module.exports.getCountrys = (req, res)=> {
    //console.log('here all Company list');
    CompanyModel.getAllCountrys((err, companys) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Company', companys);
        res.send(companys)
    })
}

// get city by Country ID
module.exports.getCityByCountryID = (req, res)=>{
    //console.log('get emp by id');
    CompanyModel.getCityByCountry(req.params.id, (err, company)=>{
        if(err)
        res.send(err);
        console.log('single employee data',company);
        res.send(company);
    })
}

// get all Company Types
module.exports.getCompanysTypeList = (req, res)=> {
    //console.log('here all Company list');
    CompanyModel.getAllCompanysTypes((err, companys) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Company', companys);
        res.send(companys)
    })
}


module.exports.getUserType = (req, res)=> {
    //console.log('here all Company list');
    CompanyModel.getAllUserTypes((err, companys) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Company', companys);
        res.send(companys)
    })
}

module.exports.getAttendanceTypes = (req, res)=>{
    CompanyModel.getAttendanceTypes((err, companys) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Company', companys);
        res.send(companys)
    })
}