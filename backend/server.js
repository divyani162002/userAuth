const express = require("express");
require("dotenv").config();
const { errorHandler } = require("./midleware/errHandler");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Server is running");
});
app.use("/", require("./routes/registerRoute"));

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error Handler Middleware
app.use(errorHandler);

// Database Connection
const dbConnection = require("./db_connection/db_config");
dbConnection();

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
