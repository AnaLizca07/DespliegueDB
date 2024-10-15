const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./proyecto-api/src/config/database.js');
const itemRoutes = require('./proyecto-api/src/routes/itemRoutes.js');
const errorHandler = require('./proyecto-api/src/middleware/errorHandler.js');

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use('/api/items', itemRoutes);

app.use(errorHandler);

module.exports = app;