const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    coverDescription: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    cover: {
      path: { type: String, required: true },
      filename: { type: String, required: true },
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    actors: [String],
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
      default: "translated",
    },
    ageLimit: {
      type: Number,
      default: 10,
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
