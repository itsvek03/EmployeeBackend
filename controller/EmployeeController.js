const EmployeeModel = require('../model/EmployeeModel');
const logo = require('../utils/multer')
const port = "http://localhost:8000"


//CRUD operation for Employee

// Create
exports.createEmployee = [logo.single('LogoImage'), async (req, res) => {
    try {
        const emp = await EmployeeModel.create({
            CompanyName: req.body.CompanyName,
            Description: req.body.Description,
            LogoImage: port + "/uploads/" + req.file.filename,
            City: req.body.City,
            State: req.body.State,
            Contact: req.body.Contact,
            Email: req.body.Email
        })
        const empdata = await emp.save();
        console.log(empdata)
        return res.status(200).json({
            status: "Successfully Inserted",
            data: empdata
        })
    }
    catch (err) {
        return res.status(400).json({
            status: "Something went wrong",
            data: err.message
        })
    }
}]


// Get Employee
exports.GetEmployee = async (req, res) => {
    try {
        const emp = await EmployeeModel.find();
        return res.status(200).json({
            data: emp
        })
    }
    catch {
        res.status(400).json({
            status: "Something went wrong"
        })
    }
}

// Get Employee By Id
exports.GetEmployeeById = async (req, res) => {
    try {
        const emp = await EmployeeModel.findById(req.params.id);
        return res.status(200).json({
            data: emp
        })
    }
    catch (err) {
        return res.status(400).json({
            status: "Invalid Id"
        })
    }
}


// Delete by id
exports.DeleteEmployeeById = async (req, res) => {
    try {
        const emp = await EmployeeModel.findByIdAndRemove(req.params.id);
        res.status(200).json({
            status: "Deleted Succcessfully"
        })
    }
    catch (err) {
        res.status(400).json({
            status: "Inavlid ID"
        })
    }
}

// Patch the employee
exports.updateEmployee = [logo.single('LogoImage'), async (req, res) => {
    try {
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
        return res.status(200).json({
            status: "Successfully Updated",
            data: emp
        })
    }
    catch (err) {
        res.status(400).json({
            status: "Invalid Id"
        })
    }
}] 