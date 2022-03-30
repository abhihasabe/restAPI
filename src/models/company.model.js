var dbConn  = require('../../config/db.config');

var Companys = function(companys){
    this.company_name       =   companys.company_name;
    this.company_type       =   companys.company_type;
    this.company_email      =   companys.company_email;
    this.company_phone      =   companys.company_phone;
    this.company_fax        =   companys.company_fax;
    this.company_address    =   companys.company_address;
    this.company_branch     =   companys.company_branch;
    this.company_pincode    =   companys.company_pincode;
    this.company_country    =   companys.company_country;
    this.company_website    =   companys.company_website;
    this.company_info       =   companys.company_info;
}

// get all companys
Companys.getAllCompanys = (result) =>{
    dbConn.query('SELECT * FROM company_table', (err, res)=>{
        if(err){
            console.log('Error while fetching companys', err);
            result(null,err);
        }else{
            console.log('companys fetched successfully');
            result(null,res);
        }
    })
}

// get company by ID from DB
Companys.getCompanyByID = (id, result)=>{
    dbConn.query('SELECT * FROM company_table WHERE cid=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching companys by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}


// Companys.createCompany = (companyReqData, result) =>{
//     dbConn.query('INSERT INTO company_table SET ? ', companyReqData, (err, res)=>{
//         if(err){
//             console.log('Error while inserting data');
//             result(null, err);
//         }else{
//             console.log('employees created successfully');
//             result(null, res)
//         }
//     })
// }

// create new company
Companys.createCompany = (companyReqData, result) =>{
    dbConn.query('SELECT * FROM company_table WHERE company_email=?', companyReqData.company_email, (err, res)=>{
        if(err){
            console.log('Error while fetching companys by id', err);
            result(null, err);
        }else{
            console.log('Error while fetching companys by id',res);
            if(res==null){
                dbConn.query('INSERT INTO company_table SET ? ', companyReqData, (err, res)=>{
                    if(err){
                        console.log('Error while inserting data');
                        result(null, err);
                }   else{
                        console.log('company created successfully');
                        result(null, res)
                    }
                });
            }else{
                result(null, err);
            }
        }
    })
}

// update company
Companys.updateCompany = (id, companyReqData, result)=>{
    dbConn.query("UPDATE company_table SET company_name=?,company_type=?,company_email=?,company_phone=?,company_fax=?,company_address=?,company_branch=?,company_pincode=?,company_country=?,company_website=?,company_info=? WHERE cid = ?",
     [companyReqData.company_name,companyReqData.company_type,companyReqData.company_email,companyReqData.company_phone,companyReqData.company_fax,companyReqData.company_address,companyReqData.company_branch,companyReqData.company_pincode,companyReqData.company_country,companyReqData.company_website,companyReqData.company_info, id], (err, res)=>{
        if(err){
            console.log('Error while updating the company');
            result(null, err);
        }else{
            console.log("Companys updated successfully");
            result(null, res);
        }
    });
}

// delete comapny
Companys.deleteCompany = (id, result)=>{
    dbConn.query('DELETE FROM company_table WHERE cid=?', [id], (err, res)=>{
         if(err){
             console.log('Error while deleting the companys');
             result(null, err);
         }else{
             result(null, res);
         }
     })
}

module.exports = Companys;