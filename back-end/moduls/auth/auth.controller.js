const userModel = require("./../../models/user");
const registerValidator = require("./auth.validator");
const bcrypt = require("bcrypt");
const { generateAccessToken } = require("../../utils/token");
const refreshTokenModel = require("../../models/refreshToken");

exports.register = async (req, res, next) => {
  try {
    const { name, email, phone, password } = req.body;

    const duplicateInformation = await userModel.findOne({ email });
    if (duplicateInformation) {
      return res.status(404).json({
        message: "The Information duplicated",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const usercount = await userModel.countDocuments();
    const user = await userModel.create({
      name,
      email,
      phone,
      password: hashPassword,
      role: usercount > 0 ? "USER" : "ADMIN",
    });

    const userObject = user.toObject();
    Reflect.deleteProperty(userObject, "password");

    const acsessToken = await generateAccessToken(user);
    const refreshToken = await refreshTokenModel.createToken(user);

    return res
      .status(201)
      .json({ user: userObject, acsessToken, refreshToken });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { phone, password } = req.body;
    const user = await userModel.findOne({ phone });

    if (!user) {
      return res.status(403).json({
        message: "User not Found",
      });
    }
    const validPassowrd = await bcrypt.compare(password, user.password);
    if (!validPassowrd) {
      return res.json({
        message: "User Password incorrect",
      });
    }

    const acsessToken = generateAccessToken(user);
    const refreshToken = await refreshTokenModel.createToken(user);

    return res.json({ acsessToken, refreshToken });
  } catch (err) {
    next(err);
  }
};
