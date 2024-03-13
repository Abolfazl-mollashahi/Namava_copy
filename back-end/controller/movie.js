const movieModel = require("./../models/movie");
const commentModel = require("./../models/comment");

exports.createMovie = async (req, res) => {
  const {
    name,
    description,
    href,
    categoryId,
    time,
    director,
    actors,
    grouping,
    releaseYear,
    publicationStatus,
    translation,
    ageLimit,
  } = req.body;
  const createMovie = await movieModel.create({
    name,
    description,
    cover: req.file.filename,
    href,
    categoryId,
    time,
    director,
    actors,
    grouping,
    releaseYear,
    publicationStatus,
    translation,
    ageLimit,
    preview: req.file.filename,
  });
  if (createMovie) {
    return res.status(201).json({
      message: "Created Movie Successfully",
    });
  }
  return res.status(500).json({
    message: "Server Error",
  });
};

exports.getOne = async (req, res) => {
  const { title } = req.params;

  const movie = await movieModel
    .findOne({ title })
    .select("-__v -createdAt -updatedAt")
    .lean();

  const comment = await commentModel
    .find({ movie: movie._id })
    .select("-__v")
    .lean();

  return res.json({ movie, comment });
};

exports.remove = async (req, res) => {
  const isValidId = isValidObjectId(req.params.id);

  if (!isValidId) {
    return res.status(409).json({
      message: "ObjectId not valid",
    });
  }

  const removeMovie = await movieModel.findOneAndDelete({
    _id: req.params.id,
  });

  if (!removeMovie) {
    return res.status(409).json({
      message: "course not found",
    });
  }

  return res.json(removeMovie);
};
