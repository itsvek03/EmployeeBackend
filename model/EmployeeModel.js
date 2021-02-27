// Creating the model

const mongoose = require('mongoose')
const validator = require("validator");
// Creating the schema

const EmployeeSchema = new mongoose.Schema({

    CompanyName: {
        type: String,
        unique: [true, "Company Name is already exists"],
        trim: true,
        minlength: 3,
        required: true,
        lowercase: true
    },
    Description: {
        type: String,
        trim: true,
        minlength: 30,
        maxlength: 400,
        required: true,
        lowercase: true
    },
    Contact: {
        type: Number,
        trim: true,
        minlength: [10, "Atleast characters"],
        maxlength: [10, "Atleast 10 characters"],
        required: true,
    },
    Email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        validate: [validator.isEmail, "Please write proper email Address"],
        unique: [true, "Email is already present"],

    },
    LogoImage: {
        type: String,
        required: [true, "Image is required"]
    },
    State: {
        type: String,
        required: [true, "Insert the state Location"],
    },
    City: {
        type: String,
        required: [true, "Insert the cities"]
    }
})

const EmployeeModel = mongoose.model("Employees", EmployeeSchema)

module.exports = EmployeeModel;