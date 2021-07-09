const express = require("express");
const bodyParser = require("body-parser");
const db = require("../database/index.js");
const app = express();
const PORT = 3000;
const BeginnerWord = require("../database/schemas.js");
const Score = require("../database/score.js");

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

app.get("/scores", (req, res) => {
  Score.find()
    .then((scores) => {
      res.status(200).send(scores);
    })
    .catch((error) => {
      console.log("oh no, a server error", error);
      res.status(500).send(error);
    });
});

app.post("/scores", (req, res) => {
  Score.create(req.body)
    .then((score) => {
      res.status(201).send(score);
    })
    .catch((error) => {
      console.log("oh no, a server error", error);
      res.status(400).send(error);
    });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
