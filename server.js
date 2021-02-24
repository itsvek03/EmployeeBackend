//Initialize the port
const app = require('./index')
const port = process.env.PORT || 8000;

require('./connection/connection');

// Server Starting
app.listen(port, () => {
    console.log(`Server is running at the port ${port}`)
})
