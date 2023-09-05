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
app.use('/api/contacts', contactRoutes)
app.use('/api/users', userRoutes)
app.use(errorHandler)

const port = process.env.PORT || 5000;



app.listen(port, () => {
    console.log(`server running on ${port}`);
})

