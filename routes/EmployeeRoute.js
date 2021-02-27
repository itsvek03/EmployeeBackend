const EmployeeController = require('../controller/EmployeeController')
const exp = require('express')
const EmployeeRouter = exp.Router();


EmployeeRouter
    .route('/')
    .post(EmployeeController.createEmployee)
    .get(EmployeeController.GetEmployee)

EmployeeRouter
    .route('/:id')
    .get(EmployeeController.GetEmployeeById)
    .patch(EmployeeController.updateEmployee)


module.exports = EmployeeRouter