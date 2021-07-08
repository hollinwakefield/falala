const express = require("express");
const bodyParser = require("body-parser");
const db = require("../database/index.js");
const app = express();
const PORT = 3000;
const BeginnerWord = require("../database/schemas.js");

app.use(bodyParser.json());

app.use(express.static(__dirname + "/../client/public"));

app.get("/beginnerWordList", (req, res) => {
  BeginnerWord.find()
    .then((wordList) => {
      res.status(200).send(wordList);
    })
    .catch((error) => {
      console.log("oh no, a server error", error);
      res.status(500).send(error);
    });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
