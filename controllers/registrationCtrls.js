exports.getRegistrationPage = (req, res) => {
    res.render("registration", {
        title: 'Registration'
    });
};

const Registration = require("../models/registrationModel");

// Handle form submission
exports.createRegistration = async (req, res) => {
    try {
        const {
            performance,
            name,
            team_name,
            phone,
            alt_phone,
            college_name,
            department,
            no_of_participants,
            transactionID,
            rules
        } = req.body;

        const newRegistration = new Registration({
            performance,
            name,
            team_name,
            phone,
            alt_phone,
            college_name,
            department,
            no_of_participants,
            transaction_id: transactionID,
            rules
        });

        await newRegistration.save();

        console.log("✅ Registration saved successfully!");

        return res.json({ success: true }); // ✅ Only one response

    } catch (error) {
        console.error("❌ Error saving registration:", error);
        return res.status(500).json({ success: false, error: "Failed to save registration" });
    }
};
