exports.getContactPage = (req, res) => {
    res.render('contact', { title: 'Contact Us' });
}

const Contact = require("../models/contactModel");

// Submit Contact Form
exports.submitContact = async (req, res) => {
  try {
    const { name, college_name, department, phone_number, subject, message } = req.body;

    const newContact = new Contact({
      name,
      college_name,
      department,
      phone_number,
      subject,
      message,
    });

    await newContact.save();

    console.log("✅ Message saved successfully!");

    return res.json({ success: true });
    
  } catch (error) {
    console.log("❌ Error saving message!:", error);
    return res.status(500).json({ success: false, error: "Failed to save message" });
  }
};