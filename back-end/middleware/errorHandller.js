module.exports = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";

  return res.json({
    status: error.statusCode,
    message: error.message,
  });
};
