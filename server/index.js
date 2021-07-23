const express = require("express");
const bodyParser = require("body-parser");
const db = require("../database/index.js");
var expressStaticGzip = require("express-static-gzip");
const app = express();
const PORT = process.env.PORT || 3000;
const BeginnerWord = require("../database/schemas.js");
const Score = require("../database/score.js");

app.use(bodyParser.json());

// app.use(express.static(__dirname + "/../client/public"));

app.use(
  "/",
  expressStaticGzip(__dirname + "/../client/public", {
    enableBrotli: true,
    customCompressions: [
      {
        encodingName: "deflate",
        fileExtension: "zz",
      },
    ],
    orderPreference: ["br"],
  })
);

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
    .sort({ totalScore: "desc" })
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
