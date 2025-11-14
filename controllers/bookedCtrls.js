const Registration = require("../models/registrationModel");
const Contact = require("../models/contactModel");

exports.getBookedPage = async (req, res) => {
  try {
    const registrationData = await Registration.find();
    const contactData = await Contact.find();

    res.render("booked", {
      registrationData,
      contactData,
      activePage: "booked"
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

