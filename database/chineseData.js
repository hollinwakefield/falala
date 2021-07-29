const mongoose = require("mongoose");

const chineseDataSchema = new mongoose.Schema({
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
  singleTones: [
    {
      gamePlays: Number,
      gamesComplete: Number,
      scorePerMinute:: Number,
      totalScorePerMinute: Number,
      questionsAnswered: Number,
      questionsCorrect: Number,
      accuracy: String,
    }
  ],
  initials: [
    {
      gamePlays: Number,
      gamesComplete: Number,
      scorePerMinute:: Number,
      totalScorePerMinute: Number,
      questionsAnswered: Number,
      questionsCorrect: Number,
      accuracy: String,
    }
  ],
  finals: [
    {
      gamePlays: Number,
      gamesComplete: Number,
      scorePerMinute:: Number,
      totalScorePerMinute: Number,
      questionsAnswered: Number,
      questionsCorrect: Number,
      accuracy: String,
    }
  ],
  tonepairs: [
    {
      gamePlays: Number,
      gamesComplete: Number,
      scorePerMinute:: Number,
      totalScorePerMinute: Number,
      questionsAnswered: Number,
      questionsCorrect: Number,
      accuracy: String,
    }
  ],
  triplesquadruplets: [
    {
      gamePlays: Number,
      gamesComplete: Number,
      scorePerMinute:: Number,
      totalScorePerMinute: Number,
      questionsAnswered: Number,
      questionsCorrect: Number,
      accuracy: String,
    }
  ],
});

const ChineseData = mongoose.model("ChineseData", chineseDataSchema);

module.exports = ChineseData;
