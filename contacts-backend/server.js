const express = require('express');
const dotenv = require('dotenv').config();
const routes = require('./routes/contactRoutes.js');
const errorHandler = require('./middleware/errorHandler.js');

app = express();
app.use(express.json())

const port = process.env.PORT || 5000;

app.use('/api/contacts', routes)

app.use(errorHandler)

app.listen(port, () => {
    console.log(`server running on ${port}`);
})

