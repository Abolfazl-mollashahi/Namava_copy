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
    console.log(req.file);
    console.log(req.body);
  } catch (err) {
    next(err);
  }
};
