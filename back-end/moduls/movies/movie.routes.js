const express = require("express");
const controller = require("./movie.controller");
const { multerStorage } = require("./../../middleware/uploader");

const movieUpload = multerStorage("/public/movie", /mp4|mkv|jpg|png|jpeg|webp/);
const categoryUpload = multerStorage("/public/category", /jpg|png|jpeg|webp/);

const router = express.Router();

router.route("/").get(controller.getAllMovie);

router
  .route("/category")
  .get(controller.getAllCategory)
  .post(categoryUpload.single("cover"), controller.addCategoyr);

router.route("/latest").get(controller.latestMovies);

router.route("/category/:href").get(controller.getCategoryInformation);
router
  .route("/add/:categoryID")
  .post(
    movieUpload.fields([{ name: "cover" }, { name: "preview" }]),
    controller.addMovies
  );

router.route("/:movieID").get(controller.getMovieInformation);
module.exports = router;
