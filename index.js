const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');

// create express app
const app = express();

app.use(cors({
  "origin": "*",
  "credentials" : "true", 
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}));

// setup the server port
const port = process.env.PORT || 5000;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: true}));

// parse request data content type application/json
app.use(bodyParser.json());

// define root route
app.get('/', (req, res)=>{
    res.send('Hello World');
});
// import employee routes
const employeeRoutes = require('./src/routes/employee.route');

// import company routes
const companyRoutes = require('./src/routes/company.route');

// import adminlogin routes
const adminloginRoutes = require('./src/routes/adminlogin.route');

// import adminregister routes
const adminregisterRoutes = require('./src/routes/adminregister.route');

// import accessory_table routes
const accessory_tableRoutes = require('./src/routes/accessory_table.route');

// import addtask routes
const addtaskRoutes = require('./src/routes/addtask.route');

// import showtask routes
const showtaskRoutes = require('./src/routes/showtask.route');

// import manager routes
const managerRoutes = require('./src/routes/manager.route');

// create employee routes
app.use('/api/v1/employee', employeeRoutes);

// create company routes
app.use('/api/v1/company', companyRoutes);

// create adminlogin routes
app.use('/api/v1/adminlogin', adminloginRoutes);

// create adminregister routes
app.use('/api/v1/adminregister', adminregisterRoutes);

// create accessory_table routes
app.use('/api/v1/accessory_table', accessory_tableRoutes);

// create addtask routes
app.use('/api/v1/addtask', addtaskRoutes);

// create showtask routes
app.use('/api/v1/showtask', showtaskRoutes);

// create manager routes
app.use('/api/v1/manager',managerRoutes);

// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);


});