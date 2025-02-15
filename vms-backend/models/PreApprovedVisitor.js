const mongoose = require("mongoose");

const PreApprovedVisitorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  hostName: { type: String, required: true },
  hostEmail: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("PreApprovedVisitor", PreApprovedVisitorSchema);