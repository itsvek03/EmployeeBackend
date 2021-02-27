const EmployeeModel = require('../model/EmployeeModel');
const logo = require('../utils/multer')
const port = "http://localhost:8000"
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/AppError')


//CRUD operation for Employee

// Create
exports.createEmployee = [logo.single('LogoImage'), catchAsync(async (req, res) => {
    if (1) {
        const emp = await EmployeeModel.create({
            CompanyName: req.body.CompanyName,
            Description: req.body.Description,
            LogoImage: port + "/uploads/" + req.file.filename,
            City: req.body.City,
            State: req.body.State,
            Contact: req.body.Contact,
            Email: req.body.Email
        });
        const empdata = await emp.save();
        console.log(empdata)
        res.status(200).json({
            status: "Successfully Inserted",
            data: empdata
        })
    }
    else {
        return next(new AppError("Insertion failed", 500))
    }
})]


// Get Employee
exports.GetEmployee = catchAsync(async (req, res, next) => {
    const emp = await EmployeeModel.find();
    
    res.status(200).json({
        count: emp.length,
        data: emp
    })
})

// Get Employee By Id
exports.GetEmployeeById = catchAsync(async (req, res, next) => {
    if (req.params.id === 0) {
        return null
    }
    const emp = await EmployeeModel.findById(req.params.id);
    if (req.params.id === 0) {
        return null
    }
    if (!emp) {
        return next(new AppError("Id is not valid", 400));
    }
    return res.status(200).json({
        data: emp
    })
})




// Patch the employee
exports.updateEmployee = [logo.single('LogoImage'), catchAsync(async (req, res, next) => {

    if (req.file) {
        var data = {
            LogoImage: port + "/uploads/" + req.file.filename,
            ...req.body
        }
    }
    else {
        var data = req.body
    }
    const emp = await EmployeeModel.findByIdAndUpdate(req.params.id, data, {
        new: true,
        runValidators: true
    });
    if (!emp) {
        return next(new AppError("Invalid Id", 400))
    }
    return res.status(200).json({
        status: "Successfully Updated",
        data: emp
    })
})] 
