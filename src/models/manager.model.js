var dbConn  = require('../../config/db.config');

var Manager = function(manager){
    this.company_id       =   manager.company_id;
    this.projects         =   manager.projects;
    this.team_leaders     =  manager.team_leaders;
}

// get all employees
Manager.getAllEmployees = (result) =>{
    dbConn.query('SELECT * FROM manager', (err, res)=>{
        if(err){
            console.log('Error while fetching employees', err);
            result(null,err);
        }else{
            console.log('employees fetched successfully');
            result(null,res);
        }
    })
}

// get employee by ID from DB
Manager.getEmployeeByID = (id, result)=>{
    dbConn.query('SELECT * FROM manager WHERE company_id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching employees by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new employee
Manager.createEmployee = (employeeReqData, result) =>{
    dbConn.query('INSERT INTO manager SET ? ', employeeReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('employees created successfully');
            result(null, res)
        }
    })
}

// update employee
Manager.updateEmployee = (id, employeeReqData, result)=>{
    dbConn.query("UPDATE manager SET company_id=?,projects=?,team leaders=? WHERE mployee id = ?", [employeeReqData.company_id,employeeReqData.projects,employeeReqData.team_leaders, id], (err, res)=>{
        if(err){
            console.log('Error while updating the employee');
            result(null, err);
        }else{
            console.log("Employee updated successfully");
            result(null, res);
        }
    });
}

// delete employee
Manager.deleteEmployee = (id, result)=>{
    dbConn.query('DELETE FROM manager WHERE employee id=?', [id], (err, res)=>{
         if(err){
             console.log('Error while deleting the employee');
             result(null, err);
         }else{
             result(null, res);
         }
     })
}

module.exports = Manager;