const EmployeeController = require('../controller/EmployeeController')
const express = require('express')
const EmployeeRouter = express.Router();


EmployeeRouter
    .route('/')
    .post(EmployeeController.createEmployee)
    .get(EmployeeController.GetEmployee)

EmployeeRouter
    .route('/:id')
    .get(EmployeeController.GetEmployeeById)
    .patch(EmployeeController.updateEmployee)
    .delete(EmployeeController.DeleteEmployeeById)

module.exports = EmployeeRouter