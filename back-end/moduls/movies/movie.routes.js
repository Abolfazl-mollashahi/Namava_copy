const express = require("express");
const controller = require("./movie.controller");
const { multerStorage } = require("./../../middleware/uploader");

const movieUpload = multerStorage("./public/movie");
const categoryUpload = multerStorage("./public/category", /jpg|png|jpeg|webp/);

const router = express.Router();

router
  .route("/")
  .get(controller.getMovie)
  .post(
    movieUpload.fields([{ name: "cover" }, { name: "preview" }]),
    controller.addMovies
  );

router
  .route("/category")
  .get(controller.getCategory)
  .post(categoryUpload.single("cover"), controller.addCategoyr);

module.exports = router;
