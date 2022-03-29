const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

const adminloginsController = require('../controllers/adminlogin.controller');

// get all adminlogin
router.get('/', adminloginsController.getadminloginsList);

// get adminlogin by ID
router.get('/:id',adminloginsController.getadminloginByID);

/*const schema = Joi.object().keys({
    username : Joi.string().trim().username().required(),
    password : Joi.string().min(5).max(10).required()
});
Joi.validate(req.body,schema,(err,result)=>{
    if(err){
        console.log(err);
        res.send('an error has occured');
    }
    console.log(result);
    res.send('succesfully posted data');
})
*/
// create new adminlogin
router.post('/', adminloginsController.createNewadminlogin);

// update adminlogin
router.put('/:id', adminloginsController.updateadminlogin);

// delete adminlogin
router.delete('/:id',adminloginsController.deleteadminlogin);

module.exports = router;