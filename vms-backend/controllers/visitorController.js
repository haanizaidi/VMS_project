const Visitor = require("../models/Visitor");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.registerVisitor = async (req, res) => {
  try {
    const { name, email, phone, hostName, hostEmail } = req.body;

    if (!name || !email || !phone || !hostName || !hostEmail) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const visitor = new Visitor({ name, email, phone, hostName, hostEmail });
    await visitor.save();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Visitor Registration Confirmation",
      text: `Hello ${name},\n\nYou have successfully registered.`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: "Visitor registered successfully", visitor });
  } catch (error) {
    console.error("Error in registerVisitor:", error);
    res.status(500).json({ error: error.message });
  }
};
exports.exitVisitor = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const visitor = await Visitor.findOne({ email });

    if (!visitor) {
      return res.status(404).json({ error: "Visitor not found" });
    }

    // Remove the visitor from the database (or mark as checked out)
    await Visitor.findOneAndUpdate({ email },{$set:{checkOut:Date.now()}});

    // Send exit confirmation email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Visitor Checkout Confirmation",
      text: `Hello, you have successfully checked out.`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Visitor checked out successfully" });
  } catch (error) {
    console.error("Error in exitVisitor:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.getAllVisitors = async (req, res) => {
  try {
    const visitors = await Visitor.find();
    res.status(200).json(visitors);
  } catch (error) {
    console.error("Error fetching visitors:", error);
    res.status(500).json({ error: error.message });
  }
};





// Pre-Approve Visitor

const PreApprovedVisitor = require("../models/PreApprovedVisitor");
exports.preApproveVisitor = async (req, res) => {
  try {
    const { name, email, phone, hostName, hostEmail } = req.body;

    if (!name || !email || !phone || !hostName || !hostEmail) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if the visitor is already pre-approved
    const existingVisitor = await PreApprovedVisitor.findOne({ email });
    if (existingVisitor) {
      return res.status(400).json({ error: "Visitor is already pre-approved" });
    }

    // Create a new pre-approved visitor
    const preApprovedVisitor = new PreApprovedVisitor({
      name,
      email,
      phone,
      hostName,
      hostEmail,
    });
    await preApprovedVisitor.save();

    res.status(201).json({
      message: "Visitor pre-approved successfully",
      preApprovedVisitor,
    });
  } catch (error) {
    console.error("Error in preApproveVisitor:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.getAllPreApprovedVisitors = async (req, res) => {
  try {
    const preApprovedVisitors = await PreApprovedVisitor.find();
    res.status(200).json(preApprovedVisitors);
  } catch (error) {
    console.error("Error fetching pre-approved visitors:", error);
    res.status(500).json({ error: error.message });
  }
};
