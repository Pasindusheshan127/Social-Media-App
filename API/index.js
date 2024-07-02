const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");

const app = express();
const router = express.Router();
const path = require("path");

// Load environment variables from .env file
dotenv.config();

// Middleware setup
app.use(helmet());
app.use(morgan("common"));
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});

// app.use("/api", router);

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

// Database connection
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server
    app.listen(PORT, () => {
      console.log(`Backend server is running on port ${PORT}!`);
    });
  })
  .catch((err) => console.error("Could not connect to MongoDB", err));
