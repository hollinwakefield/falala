const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema({
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
  word_id: {
    type: Number,
  },
});

module.exports.word = wordSchema;
module.exports.incorrectWord = incorrectWordSchema;
module.exports.audio = audioSchema;
