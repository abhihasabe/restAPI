
const EmployeeModel = require('../models/employee.model');

// get all employee list
exports.getEmployeeList = (req, res)=> {
    //console.log('here all employees list');
    EmployeeModel.getAllEmployees((err, employee) =>{
        console.log('We are here');
        if(err)
        res.json({status:false, message:err, data:employee});
        console.log('single employee data',employee);
        res.json({status:true, message:"Data Fetch Successfully", data:employee});
    })
}

// get employee by ID
exports.getEmployeeByID = (req, res)=>{
    //console.log('get emp by id');
    EmployeeModel.getEmployeeByID(req.params.id, (err, employee)=>{
        if(err)
        if(err)
        res.json({status:false, message:err, data:employee});
        console.log('single employee data',employee);
        res.json({status:true, message:"Data Fetch Successfully", data:employee});
    })
}

// create new employee
exports.createNewEmployee = (req, res) =>{
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData', employeeReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        EmployeeModel.createEmployee(employeeReqData, (err, employee)=>{
            if(err)
                res.json({status:false, message:err, data:employee});
                console.log('single employee data',employee);
                res.json({status:true, message:"Data Fetch Successfully"});
        })
    }
}

// update employee
exports.updateEmployee = (req, res)=>{
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData update', employeeReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        EmployeeModel.updateEmployee(req.params.id, employeeReqData, (err, employee)=>{
            if(err)
                res.json({status:false, message:err, data:employee});
                console.log('single employee data',employee);
                res.json({status:true, message:"Data Fetch Successfully"});
        })
    }
}

// delete employee
exports.deleteEmployee = (req, res)=>{
    EmployeeModel.deleteEmployee(req.params.id, (err, employee)=>{
        if(err)
        res.json({status:false, message:err, data:employee});
        console.log('single employee data',employee);
        res.json({status:true, message:"Employee Deleted Successfully"});
    })
}