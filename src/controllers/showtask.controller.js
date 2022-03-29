const showtaskModel = require('../models/showtask.model');

// get all showtask list showtask
exports.showtasksList = (req, res)=> {
    //console.log('here all showtask list');
    showtaskModel.getAllshowtasks((err, showtasks) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('showtask', showtasks);
        res.send(showtasks)
    })
}

// get showtask by ID
exports.getshowtaskByID = (req, res)=>{
    //console.log('get emp by id');
    showtaskModel.getshowtaskByID(req.params.id, (err, showtask)=>{
        if(err)
        res.send(err);
        console.log('single employee data',showtask);
        res.send(showtask);
    })
}


// create new showtask
exports.createNewshowtask = (req, res) =>{
    const showtaskReqData = new showtaskModel(req.body);
    console.log('showtaskReqData', showtaskReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        showtaskModel.createshowtask(showtaskReqData, (err, showtask)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'showtask Created Successfully', data: showtask.insertId})
        })
    }
}


// update showtask
exports.updateshowtask = (req, res)=>{
    const showtaskReqData = new showtaskModel(req.body);
    console.log('showtaskReqData update', showtaskReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        showtaskModel.updateshowtask(req.params.id, showtaskReqData, (err, showtask)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'showtask updated Successfully'})
        })
    }
}


// delete showtask
exports.deleteshowtask = (req, res)=>{
    showtaskModel.deleteshowtask(req.params.id, (err, showtask)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'showtask deleted successully!'});
    })
}