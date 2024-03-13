const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const authRoter = require("./routes/auth");
const userRoter = require("./routes/user");
const movieRoter = require("./routes/movie");
const commentRoter = require("./routes/comment");
const categoryRoter = require("./routes/category");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/auth/", authRoter);
app.use("/user/", userRoter);
app.use("/movie/", movieRoter);
app.use("/comment/", commentRoter);
app.use("/category/", categoryRoter);

module.exports = app;
