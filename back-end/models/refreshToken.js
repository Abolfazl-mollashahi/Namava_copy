const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const schema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  token: {
    type: String,
    required: true,
    unique: true,
  },
  expire: {
    type: Date,
    required: true,
  },
});

schema.statics.createToken = async (user) => {
  const expireTime = process.env.Expire_Refresh_Token;
  const token = uuidv4();
  const refreshToken = new model({
    token,
    user: user._id,
    expire: new Date(Date.now() + expireTime * 24 * 60 * 60 * 1000),
  });

  await refreshToken.save();
  return token;
};

schema.statics.verifyToken = async (token) => {
  const refreshToken = await model.findOne({ token });

  if (refreshToken && refreshToken.expire >= Date.now()) {
    return refreshToken.user;
  } else {
    return null;
  }
};

const model = mongoose.model("refreshToken", schema);

module.exports = model;
