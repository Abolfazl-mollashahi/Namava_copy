const multer = require("multer");
const fs = require("fs");
const path = require("path");

exports.multerStorage = (destinations, allowedTypes = /mp4 ||mkv/) => {
  destinations = path.join(__dirname, "..", "..", "front-end") + destinations;

  if (!fs.existsSync(destinations)) {
    fs.mkdirSync(destinations);
  }

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, destinations);
    },
    filename: (req, file, cb) => {
      const extname = path.extname(file.originalname);
      const filename = Date.now() + Math.floor(Math.random() * 9999);
      cb(null, `${filename}${extname}`);
    },
  });

  const fileFilter = function (req, file, cb) {
    if (allowedTypes.test(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("File Types Not Allowed"));
    }
  };

  const uploader = multer({
    storage,
    limits: {
      fileSize: 50_000_000,
    },
    fileFilter,
  });
  return uploader;
};
