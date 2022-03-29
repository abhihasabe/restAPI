const accessory_tableModel = require('../models/accessory_table.model');

// get all accessory_table list accessory_table
exports.accessory_tablesList = (req, res)=> {
    //console.log('here all accessory_table list');
    accessory_tableModel.getAllaccessory_tables((err, accessory_tables) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('accessory_table', accessory_tables);
        res.send(accessory_tables)
    })
}

// get accessory_table by ID
exports.getaccessory_tableByID = (req, res)=>{
    //console.log('get emp by id');
    accessory_tableModel.getaccessory_tableByID(req.params.id, (err, accessory_table)=>{
        if(err)
        res.send(err);
        console.log('single employee data',accessory_table);
        res.send(accessory_table);
    })
}


// create new accessory_table
exports.createNewaccessory_table = (req, res) =>{
    const accessory_tableReqData = new accessory_tableModel(req.body);
    console.log('accessory_tableReqData', accessory_tableReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        accessory_tableModel.createaccessory_table(accessory_tableReqData, (err, accessory_table)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'accessory_table Created Successfully', data: accessory_table.insertId})
        })
    }
}


// update accessory_table
exports.updateaccessory_table = (req, res)=>{
    const accessory_tableReqData = new accessory_tableModel(req.body);
    console.log('accessory_tableReqData update', accessory_tableReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        accessory_tableModel.updateaccessory_table(req.params.id, accessory_tableReqData, (err, accessory_table)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'accessory_table updated Successfully'})
        })
    }
}


// delete accessory_table
exports.deleteaccessory_table = (req, res)=>{
    accessory_tableModel.deleteaccessory_table(req.params.id, (err, accessory_table)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'accessory_table deleted successully!'});
    })
}