const express = require("express");
const commentController = require("./../controller/comment");
const authMiddleware = require("./../middleware/auth");
const isAdminMiddleware = require("./../middleware/isAdmin");

const router = express.Router();

router.route("/").post(authMiddleware, commentController.create);

router
  .route("/:id")
  .delete(authMiddleware, isAdminMiddleware, commentController.remove);

router
  .route("/:id/accept")
  .put(authMiddleware, isAdminMiddleware, commentController.accept);

router
  .route("/:id/reject")
  .put(authMiddleware, isAdminMiddleware, commentController.reject);

router
  .route("/:id/answer")
  .post(authMiddleware, isAdminMiddleware, commentController.answer);

module.exports = router;
