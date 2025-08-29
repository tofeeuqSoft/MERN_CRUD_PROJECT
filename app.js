const express = require("express");
const router = require("./src/routes/api");
const app = new express();
const bodyParser = require("body-parser");
const path = require("path");
//Security Middleware
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");



// Security Middleware
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// body parser
app.use(bodyParser.json());

//Rate limiter
const limiter = rateLimit({windowMs:15*60*100, max:3000,})
app.use(limiter)

// Connection Database

//Database library import
const mongoose = require("mongoose");

// Database connection
const uri = "mongodb+srv://crud:Now1234Shin@cluster0.0jiyobw.mongodb.net/crud?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected with Mongoose"))
  .catch(err => console.error("MongoDB Connection Error:", err));



//Maneging backend API routing
app.use("/api/v1", router)
//Maneging frontend routing
app.use(express.static(path.join(__dirname, "client", "dist")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
module.exports = app;


