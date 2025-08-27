const express = require("express");
const cors = require("cors"); // ✅ Import cors
const connectDB = require("./config/db");
require("dotenv").config();

// Connect to database
connectDB();

const app = express();

// ✅ Enable CORS (allow frontend requests)
app.use(cors({ origin: "http://localhost:3000" })); // Specific origin for security
// Or use app.use(cors()); to allow all origins

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/travel", require("./routes/travelRoutes"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
