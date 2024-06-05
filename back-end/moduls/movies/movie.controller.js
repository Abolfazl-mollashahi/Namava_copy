const categoryModel = require("./../../models/category");
const movieModel = require("./../../models/movie");
const previewModel = require("./../../models/preview");
const { categoryValidator } = require("./movie.validator");

exports.getAllMovie = async (req, res, next) => {
  //codes
};
exports.getMovieInformation = async (req, res, next) => {
  //codes
};

exports.addMovies = async (req, res, next) => {
  try {
    const { categoryID } = req.params;

    const {
      name,
      coverDescription,
      description,
      time,
      director,
      actors,
      releaseYear,
      publicationStatus,
      translation,
      ageLimit,
    } = req.body;

    if (!req.files) {
      return res.status(403).json("Please Upload Movie Prewies and cover");
    }

    // todo: validator

    const coverFilename = req.files.cover[0].filename;
    const previewFilename = req.files.preview[0].filename;

    const coverUrlPath = `/public/movie/${coverFilename}`;
    const previewUrlPath = `/public/movie/${previewFilename}`;

    //Movie categories
    const movieCategory = await categoryModel.findOne({ _id: categoryID });

    const movie = await movieModel.create({
      name,
      coverDescription,
      description,
      cover: {
        path: coverUrlPath,
        filename: coverFilename,
      },
      category: movieCategory._id,
      time,
      director,
      actors,
      releaseYear,
      publicationStatus,
      translation,
      ageLimit,
    });

    await previewModel.create({
      preview: {
        path: previewUrlPath,
        filename: previewFilename,
      },
      movie: movie._id,
      category: movieCategory._id,
    });

    return res.status(201).json({ message: "movie created successfully" });
  } catch (err) {
    next(err);
  }
};

exports.getAllCategory = async (req, res) => {
  const categories = await categoryModel.find({}).lean();

  if (!categories) {
    return res.status(404).json({ message: "No Category Created yet" });
  }

  return res.json({ categories });
};

exports.getCategoryInformation = async (req, res) => {
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
    const coverUrlPath = `/public/category/${req.files.filename}`;

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
