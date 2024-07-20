const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

const app = express();

app.use(express.json());
dotenv.config({ path: './config/config.env'})
const transactions = require('./routes/transactions')

connectDB();

app.use('/api/v1/transactions', transactions)

const PORT =process.env.PORT || 5000;

app.listen(PORT , console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold));