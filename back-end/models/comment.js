const mongoose = require("mongoose");
const { movieSchema } = require("./movie");

const commentSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      require: true,
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    score: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
    movie: {
      type: mongoose.Types.ObjectId,
      ref: "movie",
    },
    isAccept: {
      type: Number, // 0 - 1
      default: 0,
    },
    isAnswer: {
      type: Number, // 0 - 1
      default: 0,
    },
    mainCommentId: {
      type: mongoose.Types.ObjectId,
      ref: "comment",
    },
  },
  { timestamps: true }
);

const commentsModel = mongoose.model("comments", commentSchema);

module.exports = commentsModel;
