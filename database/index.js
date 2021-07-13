const mongoose = require("mongoose");
const config = require("../config");

const connectionString =
  "mongodb+srv://hollinwakefield:ivZIChxLxkXvoLIh@cluster0.darjz.mongodb.net/putonghua?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
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
