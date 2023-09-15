const express = require('express');
const dotenv = require('dotenv').config();

const errorHandler = require('./middleware/errorHandler.js');
const dbConnection = require('./config/dbConnection.js');
const userRoutes = require('./routes/userRoutes.js');
const contactRoutes = require('./routes/contactRoutes.js');

app = express()
dbConnection()

//middlewares
app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use('/api/contacts', contactRoutes)
app.use('/api/users', userRoutes)
app.use(errorHandler)

const port = process.env.PORT || 5000;



app.listen(port, () => {
    console.log(`server running on ${port}`);
})

