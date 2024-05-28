const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("express-flash");
const authRoter = require("./moduls/auth/auth.routes");
const { setHeaders } = require("./middleware/setHeader");

app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));

// cookie Parser
app.use(cookieParser());

//express Flash and Sessions
app.use(
  session({
    secret: process.env.Secret_Sessions,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());

// Set Header (cors Policy)
app.use(setHeaders);

// Routes
app.use("/auth", authRoter);

module.exports = app;
