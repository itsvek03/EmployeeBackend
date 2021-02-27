//Initialize the port
const app = require('./index')
const port = process.env.PORT || 8000;

require('./connection/connection');


process.on("uncaughtException", (err) => {
    console.log("UNCAUGHT EXCEPTION! 💥Shutting down...");
    console.log(err.name, err.message);
    process.exit(1);
});


// Server Starting
app.listen(port, () => {
    console.log(`Server is running at the port ${port}`)
})


process.on("unhandledRejection", (err) => {
    console.log("UNHANDLED REJECTION! 💥Shutting down...");
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});