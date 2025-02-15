const express = require('express');
const router = express.Router();
const visitorController = require('../controllers/visitorController');

// Register Visitor
router.post('/register', visitorController.registerVisitor);

// Exit Visitor
router.post('/exit', visitorController.exitVisitor);

router.post("/pre-approve", visitorController.preApproveVisitor); // New route
router.get("/pre-approved", visitorController.getAllPreApprovedVisitors);

// Get All Visitors
router.get('/all', visitorController.getAllVisitors);

module.exports = router;