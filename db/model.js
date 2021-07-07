const mongoose = require("mongoose");

const correctWordSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true,
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
  firstTone: {
    type: Number,
  },
  secondTone: {
    type: Number,
    default: null,
  },
  thirdTone: {
    type: Number,
    default: null,
  },
  fourthTone: {
    type: Number,
    default: null,
  },
  translation: {
    type: String,
  },
  audio: [{}],
  incorrectWords: [{}],
});

const incorrectWordSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true,
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
  firstTone: {
    type: Number,
  },
  secondTone: {
    type: Number,
    default: null,
  },
  thirdTone: {
    type: Number,
    default: null,
  },
  fourthTone: {
    type: Number,
    default: null,
  },
  audio: [{}],
});

const audioSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true,
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

module.exports.correctWord = correctWordSchema;
module.exports.incorrectWord = incorrectWordSchema;
module.exports.audio = audioSchema;
module.exports.score = scoreSchema;
