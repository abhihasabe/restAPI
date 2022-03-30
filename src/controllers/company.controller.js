
const CompanyModel = require('../models/company.model');

// get all Company list
exports.getCompanysList = (req, res)=> {
    //console.log('here all Company list');
    CompanyModel.getAllCompanys((err, company) =>{
        console.log('We are here');
        if(err)
        res.json({status:false, message:err, data:company});
        console.log('single employee data',company);
        res.json({status:true, message:"Data Fetch Successfully", data:company});
    })
}

// get company by ID
exports.getCompanyByID = (req, res)=>{
    //console.log('get emp by id');
    CompanyModel.getCompanyByID(req.params.id, (err, company)=>{
        if(err)
        res.json({status:false, message:err, data:company});
        console.log('single employee data',company);
        res.json({status:true, message:"Data Fetch Successfully", data:company});
    })
}


// create new company
exports.createNewCompany = (req, res) =>{
    const companyReqData = new CompanyModel(req.body);
    console.log('companyReqData', companyReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        CompanyModel.createCompany(companyReqData, (err, company)=>{
            if(err)
                res.json({status:false, message:err, data:company});
                console.log('single employee data',company);
                res.json({status:true, message:"Data Fetch Successfully", data:company});
        })
    }
}


// update company
exports.updateCompany = (req, res)=>{
    const companyReqData = new CompanyModel(req.body);
    console.log('companyReqData update', companyReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        CompanyModel.updateCompany(req.params.id, companyReqData, (err, company)=>{
            if(err)
                res.json({status:false, message:err, data:company});
                console.log('single employee data',company);
                res.json({status:true, message:"Company Update Successfully", data:company});
        })
    }
}


// delete company
exports.deleteCompany = (req, res)=>{
    CompanyModel.deleteCompany(req.params.id, (err, company)=>{
        if(err)
        res.json({status:false, message:err, data:company});
        console.log('single employee data',company);
        res.json({status:true, message:"Company Delete Successfully", data:company});
    })
}