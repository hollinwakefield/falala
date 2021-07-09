const mongoose = require("mongoose");

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
    type: String,
  },
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;
