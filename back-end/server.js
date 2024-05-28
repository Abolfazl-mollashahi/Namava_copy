const mongoose = require("mongoose");
require("dotenv").config();
const app = require("./app");

const port = process.env.PORT;

function dbConnected() {
  mongoose
    .connect(process.env.Mongo_URI)
    .then(() => {
      console.log(
        `Mongo DB connected Successfully On ${mongoose.connection.host}`
      );
    })
    .catch((err) => {
      console.log("DB ERR Connected =>", err);
      process.exit(1);
    });
}

function startServer() {
  let port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Server Running On Port ${port}`);
  });
}

function run() {
  dbConnected(), startServer();
}
run();
