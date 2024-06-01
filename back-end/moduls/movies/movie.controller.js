const categoryModel = require("./../../models/category");
const { categoryValidator } = require("./movie.validator");

exports.getMovie = async (req, res, next) => {
  //codes
};

exports.addMovies = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

exports.getCategory = async (req, res) => {
  //
};

exports.addCategoyr = async (req, res, next) => {
  try {
    const { title, href } = req.body;

    if (!req.file) {
      return res.status(403).json({
        message: "Please Upload Category cover",
      });
    }

    categoryValidator.validateSync({ title, href }, { abortEarly: false });
    const coverUrlPath = `/public/category/${req.file.filename}`;

    await categoryModel.create({
      title,
      href,
      cover: {
        path: coverUrlPath,
        filename: req.file.filename,
      },
    });

    return res.status(201).json({ message: "category created" });
  } catch (err) {
    next(err);
  }
};
