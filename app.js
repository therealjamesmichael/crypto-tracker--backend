const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
require('dotenv').config()

// Express app
app = express();

// Mongoose/mongoDB
mongoose
	.connect(process.env.DB_CONNECTION)
	.then((result) => app.listen(3000))
	.catch((err) => console.log(err));

// Import Routes
const coinsRoute = require('./routes/coins'); 

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.use('/coins', coinsRoute);