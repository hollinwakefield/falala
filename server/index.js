const express = require("express");
const bodyParser = require("body-parser");
const controller = require("../database/controller.js");
const db = require("../database/index.js");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(express.static(__dirname + "/../client/public"));

app.get("/beginnerWordList", (req, res) => {
  res.send(db.getCollection("beginnerWordList"));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
