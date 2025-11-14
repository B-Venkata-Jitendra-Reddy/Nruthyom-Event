const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  performance: { type: String, required: true },
  name: { type: String, required: true },
  team_name: { type: String, required: true },
  phone: { type: String, required: true },
  alt_phone: { type: String, required: true },
  college_name: { type: String, required: true },
  department: { type: String, required: true },
  no_of_participants: { type: String, required: false },
  transaction_id: { type: String, required: true },
  rules: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Registration", registrationSchema);
