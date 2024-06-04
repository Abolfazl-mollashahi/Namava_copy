const mongoose = require("mongoose");

const schema = mongoose.Schema({
  preview: {
    path: { type: String, required: true },
    filename: { type: String, required: true },
  },
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "movie",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },
});

const model = mongoose.model("preview", schema);

module.exports = model;
