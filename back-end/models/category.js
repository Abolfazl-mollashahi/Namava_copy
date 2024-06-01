const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
});

const categoryModel = mongoose.model("category", schema);

module.exports = categoryModel;
