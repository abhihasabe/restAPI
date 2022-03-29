var dbConn  = require('../../config/db.config');

var showtasks = function(showtasks){
    this.showtask_empployee_id    =   showtasks.showtask_empployee_id;
    this.showtask_empployee_name  =   showtasks.showtask_empployee_name;
    this.showtask_task_assigner   =   showtasks.showtask_task_assigner;
    this.showtask_task_title  =   showtasks.showtask_task_title;
    this.showtask_task_description  =   showtasks.showtask_task_description;
}

// get all showtasks
showtasks.getAllshowtasks = (result) =>{
    dbConn.query('SELECT * FROM showtask', (err, res)=>{
        if(err){
            console.log('Error while fetching showtasks', err);
            result(null,err);
        }else{
            console.log('showtasks fetched successfully');
            result(null,res);
        }
    })
}

// get showtask by ID from DB
showtasks.getshowtaskByID = (id, result)=>{
    dbConn.query('SELECT * FROM showtasks WHERE cId=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching showtasks by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new showtask
showtasks.createshowtask = (showtaskReqData, result) =>{
    dbConn.query('INSERT INTO showtasks SET ? ', showtaskReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('showtask created successfully');
            result(null, res)
        }
    })
}

// update showtask
showtasks.updateshowtask = (id, showtaskReqData, result)=>{
    dbConn.query("UPDATE showtask SET showtask_empployee_id=?,showtask_empployee_name=?,showtask_task_assigner=?,showtask_task_title=?,showtask_task_description  =? WHERE cId = ?", [showtaskReqData.showtask_empployee_id,showtaskReqData.showtask_empployee_name,showtaskReqData.showtask_task_assigner,showtaskReqData.showtask_task_title,showtaskReqData.showtask_task_title, id], (err, res)=>{
        if(err){
            console.log('Error while updating the showtask');
            result(null, err);
        }else{
            console.log("showtask updated successfully");
            result(null, res);
        }
    });
}

// delete showtask
showtasks.deleteshowtask = (id, result)=>{
    dbConn.query('DELETE FROM showtasks WHERE cId=?', [id], (err, res)=>{
         if(err){
             console.log('Error while deleting the showtasks');
             result(null, err);
         }else{
             result(null, res);
         }
     })
}

module.exports = showtasks;