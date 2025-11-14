const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();

// Middleware to parse JSON requests
app.use(express.urlencoded({ extended: true} ));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

// set EJS as templating engine
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

// Enable layouts / Default layout for all views
app.use(expressLayouts);
app.set('layout', 'layouts/boilerplate');


// Connect to MongoDB
connectDB();

// navbar options style middleware
app.use((req, res, next) => {
  const path = req.path.toLowerCase();
  if (path === '/') {
    res.locals.activePage = 'home';
  } else if (path.includes('about')) {
    res.locals.activePage = 'about';
  } else if (path.includes('rules')) {
    res.locals.activePage = 'rules';
  } else if (path.includes('venue')) {
    res.locals.activePage = 'venue';
  } else if (path.includes('sponsors')) {
    res.locals.activePage = 'sponsors';
  } else if (path.includes('contact')) {
    res.locals.activePage = 'contact';
  } else {
    res.locals.activePage = '';
  }
  next();
});

// routes
const index = require('./routes/index');
app.use('/', index);
const registration = require('./routes/registration');
app.use('/registration', registration);
const rules = require('./routes/rules');
app.use('/rules', rules);
const contact = require('./routes/contact');
app.use('/contact', contact);
const venue = require('./routes/venue');
app.use('/venue', venue);
const sponsors = require('./routes/sponsors');
app.use('/sponsors', sponsors);
const booked = require('./routes/booked');
app.use('/booked', booked);

// Server setup
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));