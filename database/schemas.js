const mongoose = require("mongoose");

const correctWordSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true,
    unique: true,
  },
  level: {
    type: String,
  },
  simplifiedWord: {
    type: String,
  },
  traditionalWord: {
    type: String,
  },
  pinyin: {
    type: String,
  },
  firstSyllableTone: {
    type: Number,
  },
  secondSyllableTone: {
    type: Number,
    default: null,
  },
  thirdSyllableTone: {
    type: Number,
    default: null,
  },
  fourthSyllableTone: {
    type: Number,
    default: null,
  },
  translation: {
    type: String,
  },
  audio: [],
  incorrectWords: [],
});

const incorrectWordSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true,
    unique: true,
  },
  correctWord_id: {
    type: Number,
    default: null,
    index: true,
  },
  simplifiedWord: {
    type: String,
  },
  traditionalWord: {
    type: String,
  },
  pinyin: {
    type: String,
  },
  firstSyllableTone: {
    type: Number,
  },
  secondSyllableTone: {
    type: Number,
    default: null,
  },
  thirdSyllableTone: {
    type: Number,
    default: null,
  },
  fourthSyllableTone: {
    type: Number,
    default: null,
  },
  audio: [],
});

const audioSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true,
    unique: true,
  },
  correctWord_id: {
    type: Number,
    default: null,
    index: true,
  },
  incorrectWord_id: {
    type: Number,
    default: null,
    index: true,
  },
  url: {
    type: String,
  },
});

const scoreSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true,
  },
  user_id: {
    type: Number,
    index: true,
  },
  name: {
    type: String,
  },
  score: {
    type: Number,
  },
  totalResponses: {
    type: Number,
  },
  correctResponses: {
    type: Number,
  },
  accuracy: {
    type: Number,
  },
});

const BeginnerWord = mongoose.model("Beginnerword", correctWordSchema);
const Score = mongoose.model("Score", scoreSchema);

module.exports = BeginnerWord;
module.exports = Score;
// module.exports.incorrectWord = incorrectWordSchema;
// module.exports.audio = audioSchema;
// module.exports.score = scoreSchema;
