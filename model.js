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

module.exports.correctWord = correctWordSchema;
module.exports.incorrectWord = incorrectWordSchema;
module.exports.audio = audioSchema;
