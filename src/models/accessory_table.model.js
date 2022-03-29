var dbConn  = require('../../config/db.config');

var accessory_tables = function(accessory_tables){
    this.Employee_Id    =   accessory_tables.Employee_Id;
    this.Accessories_name  =   accessory_tables.Accessories_name;
    this.Quantity   =   accessory_tables.Quantity;
    this.Status  =   accessory_tables.Status;
}

// get all accessory_tables
accessory_tables.getAllaccessory_tables = (result) =>{
    dbConn.query('SELECT * FROM accessories', (err, res)=>{
        if(err){
            console.log('Error while fetching accessory_tables', err);
            result(null,err);
        }else{
            console.log('accessory_tables fetched successfully');
            result(null,res);
        }
    })
}

// get accessory_table by ID from DB
accessory_tables.getaccessory_tableByID = (id, result)=>{
    dbConn.query('SELECT * FROM accessories WHERE cId=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching accessory_tables by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new accessory_table
accessory_tables.createaccessory_table = (accessory_tableReqData, result) =>{
    dbConn.query('INSERT INTO accessories SET ? ', accessory_tableReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('accessory_table created successfully');
            result(null, res)
        }
    })
}

// update accessory_table
accessory_tables.updateaccessory_table = (id, accessory_tableReqData, result)=>{
    dbConn.query("UPDATE accessory_table SET accessory_table_Empployee_Id=?,accessory_table_Accessories_name=?,accessory_table_Quantity=?,accessory_table_Status=? WHERE cId = ?", [accessory_tableReqData.accessory_table_Empployee_Id,accessory_tableReqData.accessory_table_Accessories_name,accessory_tableReqData.accessory_table_Quantity,accessory_tableReqData.accessory_table_Status, id], (err, res)=>{
        if(err){
            console.log('Error while updating the accessory_table');
            result(null, err);
        }else{
            console.log("accessory_table updated successfully");
            result(null, res);
        }
    });
}

// delete accessory_table
accessory_tables.deleteaccessory_table = (id, result)=>{
    dbConn.query('DELETE FROM accessory_tables WHERE cId=?', [id], (err, res)=>{
         if(err){
             console.log('Error while deleting the accessory_tables');
             result(null, err);
         }else{
             result(null, res);
         }
     })
}

module.exports = accessory_tables;