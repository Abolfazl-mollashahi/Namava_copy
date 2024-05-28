const jwt = require("jsonwebtoken");

const generateAccessToken = async (user) => {
  await jwt.sign({ userID: user._id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: 1000 * 60 * 60 * 24, // 1 Day
  });
};

module.exports = { generateAccessToken };
