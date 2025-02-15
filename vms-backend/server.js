// const express = require("express");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");
// const visitorRoutes = require("./routes/visitorRoutes");
// const cors = require("cors");

// dotenv.config();
// connectDB();

// const app = express();
// app.use(express.json());
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));


// app.use("/api/visitors", visitorRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// vms-backend/server.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const visitorRoutes = require("./routes/visitorRoutes");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Use visitor routes
app.use("/api/visitors", visitorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));