const express = require("express");
const connectDB = require("./config/dbConfig");
const authRoutes = require("./routes/authMethods");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(morgan("dev")); // Log HTTP requests
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // Allow frontend requests

// Routes
app.use("/api", authRoutes); // Use authMethods for authentication routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
