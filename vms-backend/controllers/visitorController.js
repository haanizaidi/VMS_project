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
