const mongoose = require('mongoose');

// Connection with the mongodb
mongoose.connect("mongodb://localhost:27017/employees", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => { console.log("Db connected Successfully") })
    .catch((err) => { console.log(err) })


module.exports = mongoose