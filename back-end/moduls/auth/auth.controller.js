const userModel = require("./../../models/user");
const registerValidator = require("./auth.validator");
const banUserModel = require("./../../models/ban-phone");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const validationResult = registerValidator(req.body);
  if (!validationResult) {
    return res.status(422).json(validationResult);
  }

  const { name, username, email, phone, password } = req.body;
  const isBannedPhoneNumber = await banUserModel.findOne({ phone });
  if (isBannedPhoneNumber) {
    return res.json({
      message: "this phone number baned",
    });
  }

  const duplicateInformation = await userModel.findOne({
    $or: [{ email }, { username }],
  });
  if (duplicateInformation) {
    return res.status(404).json({
      message: "The Information duplicated",
    });
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const usercount = await userModel.countDocuments();
  const user = await userModel.create({
    name,
    username,
    email,
    phone,
    password: hashPassword,
    role: usercount > 0 ? "USER" : "ADMIN",
  });

  const userObject = user.toObject();
  Reflect.deleteProperty(userObject, "password");

  const acsessToken = jwt.sign({ id: user._id }, process.env.JWT_secret, {
    expiresIn: "30 day",
  });

  return res.status(201).json({ user: userObject, acsessToken });
};

exports.login = async (req, res) => {
  const { data, password } = req.body;
  const user = await userModel.findOne({
    $or: [{ username: data }, { email: data }],
  });
  if (!user) {
    return res.json({
      message: "User not Found",
    });
  }
  const validPassowrd = await bcrypt.compare(password, user.password);
  if (!validPassowrd) {
    return res.json({
      message: "Password Incrructed",
    });
  }
  const acsessToken = await jwt.sign({ id: user._id }, process.env.JWT_secret, {
    expiresIn: "30 day",
  });
  return res.json({ acsessToken });
};
