const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const authRoter = require("./moduls/auth/auth.routes");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/auth", authRoter);

module.exports = app;
