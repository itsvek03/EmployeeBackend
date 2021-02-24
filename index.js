// Arranging the routes and middleware
const express = require("express");
const app = express();
const EmployeeRoute = require('./routes/EmployeeRoute')


app.use(express.json());
app.use("/uploads", express.static("uploads"))

// Routes
app.use("/api/v1/employee", EmployeeRoute)


module.exports = app;