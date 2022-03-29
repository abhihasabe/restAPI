var dbConn  = require('../../config/db.config');

var addtasks = function(addtasks){
    this.addtask_empployee_id    =   addtasks.addtask_empployee_id;
    this.addtask_empployee_name  =   addtasks.addtask_empployee_name;
    this.addtask_task_assigner   =   addtasks.addtask_task_assigner;
    this.addtask_task_title  =   addtasks.addtask_task_title;
    this.addtask_task_description  =   addtasks.addtask_task_description;
}

// get all addtasks
addtasks.getAlladdtasks = (result) =>{
    dbConn.query('SELECT * FROM addtask', (err, res)=>{
        if(err){
            console.log('Error while fetching addtasks', err);
            result(null,err);
        }else{
            console.log('addtasks fetched successfully');
            result(null,res);
        }
    })
}

// get addtask by ID from DB
addtasks.getaddtaskByID = (id, result)=>{
    dbConn.query('SELECT * FROM addtasks WHERE cId=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching addtasks by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new addtask
addtasks.createaddtask = (addtaskReqData, result) =>{
    dbConn.query('INSERT INTO addtasks SET ? ', addtaskReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('addtask created successfully');
            result(null, res)
        }
    })
}

// update addtask
addtasks.updateaddtask = (id, addtaskReqData, result)=>{
    dbConn.query("UPDATE addtask SET addtask_empployee_id=?,addtask_empployee_name=?,addtask_task_assigner=?,addtask_task_title=?,addtask_task_description  =? WHERE cId = ?", [addtaskReqData.addtask_empployee_id,addtaskReqData.addtask_empployee_name,addtaskReqData.addtask_task_assigner,addtaskReqData.addtask_task_title,addtaskReqData.addtask_task_title, id], (err, res)=>{
        if(err){
            console.log('Error while updating the addtask');
            result(null, err);
        }else{
            console.log("addtask updated successfully");
            result(null, res);
        }
    });
}

// delete addtask
addtasks.deleteaddtask = (id, result)=>{
    dbConn.query('DELETE FROM addtasks WHERE cId=?', [id], (err, res)=>{
         if(err){
             console.log('Error while deleting the addtasks');
             result(null, err);
         }else{
             result(null, res);
         }
     })
}

module.exports = addtasks;