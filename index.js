// Arranging the routes and middleware
const express = require("express");
const app = express();
const EmployeeRoute = require('./routes/EmployeeRoute')
const cors = require('cors')

app.use(cors())

app.use(express.json());
app.use("/uploads", express.static("uploads"))

// Routes
app.use("/api/v1/employee", EmployeeRoute)


module.exports = app;