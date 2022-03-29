const addtaskModel = require('../models/addtask.model');

// get all addtask list addtask
exports.addtasksList = (req, res)=> {
    //console.log('here all addtask list');
    addtaskModel.getAlladdtasks((err, addtasks) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('addtask', addtasks);
        res.send(addtasks)
    })
}

// get addtask by ID
exports.getaddtaskByID = (req, res)=>{
    //console.log('get emp by id');
    addtaskModel.getaddtaskByID(req.params.id, (err, addtask)=>{
        if(err)
        res.send(err);
        console.log('single employee data',addtask);
        res.send(addtask);
    })
}


// create new addtask
exports.createNewaddtask = (req, res) =>{
    const addtaskReqData = new addtaskModel(req.body);
    console.log('addtaskReqData', addtaskReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        addtaskModel.createaddtask(addtaskReqData, (err, addtask)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'addtask Created Successfully', data: addtask.insertId})
        })
    }
}


// update addtask
exports.updateaddtask = (req, res)=>{
    const addtaskReqData = new addtaskModel(req.body);
    console.log('addtaskReqData update', addtaskReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        addtaskModel.updateaddtask(req.params.id, addtaskReqData, (err, addtask)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'addtask updated Successfully'})
        })
    }
}


// delete addtask
exports.deleteaddtask = (req, res)=>{
    addtaskModel.deleteaddtask(req.params.id, (err, addtask)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'addtask deleted successully!'});
    })
}