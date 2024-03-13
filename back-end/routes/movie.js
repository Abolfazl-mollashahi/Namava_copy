const express = require("express");
const movieController = require("./../controller/movie");
const authMiddlware = require("./../middleware/auth");
const isAdminMiddlware = require("./../middleware/isAdmin");

const router = express.Router();

router.route("/:title").get(movieController.getOne);

router
  .route("/create")
  .post(authMiddlware, isAdminMiddlware, movieController.createMovie);

router
  .route("/:id")
  .delete(authMiddlware, isAdminMiddlware, movieController.remove);

module.exports = router;
