const express = require("express");
const authController = require("./home.controller");

const router = express.Router();

router.route("/").get(authController.showHomeViews);

module.exports = router;
