const mongoose = require("mongoose");

const gameDataSchema = new mongoose.Schema({
  gamePlays: {
    type: Number,
  },
  gamesComplete: {
    type: Number,
  },
  scorePerMinute: {
    type: Number,
  },
  totalScorePerMinute: {
    type: Number,
  },
  questionsAnswered: {
    type: Number,
  },
  questionsCorrect: {
    type: Number,
  },
  accuracy: {
    type: String,
  },
});

const GameData = mongoose.model("GameData", gameDataSchema);

module.exports = GameData;
