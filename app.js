const express = require("express");
const mongoose = require("mongoose");
// const expressLayouts = require("express-ejs-layouts");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();

// Middleware to parse JSON requests
app.use(express.urlencoded({ extended: true} ));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// set EJS as templating engine
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

// Enable layouts / Default layout for all views
// app.use(expressLayouts);
// app.set('layout', 'layouts/boilerplate');


// Connect to MongoDB


// routes
const index = require('./routes/index');
app.use('/', index);

// Server setup
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));