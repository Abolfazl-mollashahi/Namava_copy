const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "category",
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    actors: [String],
    grouping: [String],
    releaseYear: {
      type: Number,
      required: true,
    },
    publicationStatus: {
      type: String,
      default: "released",
    },
    translation: {
      type: String,
      default: "OriginalLanguage",
    },
    ageLimit: {
      type: Number,
      default: 10,
    },
    preview: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

movieSchema.virtual("comments", {
  ref: "comment",
  localField: "_id",
  foreignField: "movie",
});

const movieModel = mongoose.model("movie", movieSchema);

module.exports = movieModel;
