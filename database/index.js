require("./schemas.js");
const mongoose = require("mongoose");
const BeginnerWord = require("./schemas.js");

mongoose
  .connect("mongodb://localhost:27017/putonghua", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("yay, mongoose connected successfully");
  })
  .catch((error) => {
    console.log("oh no, mongoose.connect caught an error", error);
  });

const db = mongoose.connection;

module.exports = db;
