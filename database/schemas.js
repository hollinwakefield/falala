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

const BeginnerWord = mongoose.model("Beginnerword", correctWordSchema);

module.exports = BeginnerWord;

// module.exports.incorrectWord = incorrectWordSchema;
// module.exports.audio = audioSchema;

// const incorrectWordSchema = new mongoose.Schema({
//   id: {
//     type: Number,
//     index: true,
//     unique: true,
//   },
//   correctWord_id: {
//     type: Number,
//     default: null,
//     index: true,
//   },
//   simplifiedWord: {
//     type: String,
//   },
//   traditionalWord: {
//     type: String,
//   },
//   pinyin: {
//     type: String,
//   },
//   firstSyllableTone: {
//     type: Number,
//   },
//   secondSyllableTone: {
//     type: Number,
//     default: null,
//   },
//   thirdSyllableTone: {
//     type: Number,
//     default: null,
//   },
//   fourthSyllableTone: {
//     type: Number,
//     default: null,
//   },
//   audio: [],
// });

// const audioSchema = new mongoose.Schema({
//   id: {
//     type: Number,
//     index: true,
//     unique: true,
//   },
//   correctWord_id: {
//     type: Number,
//     default: null,
//     index: true,
//   },
//   incorrectWord_id: {
//     type: Number,
//     default: null,
//     index: true,
//   },
//   url: {
//     type: String,
//   },
// });
