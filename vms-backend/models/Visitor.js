const mongoose = require("mongoose");

const VisitorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  hostName: { type: String, required: true },
  hostEmail: { type: String, required: true },
  checkIn: { type: Date, default: Date.now },
  checkOut: { type: Date },
});

module.exports = mongoose.model("Visitor", VisitorSchema);
