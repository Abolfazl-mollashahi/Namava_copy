const jwt = require("jsonwebtoken");

const generateAccessToken = async (user) => {
  const token = await jwt.sign({ userID: user._id }, process.env.JWT_secret, {
    expiresIn: 1000 * 60 * 60 * 24, // 1 Day
  });
  return token;
};

module.exports = { generateAccessToken };
