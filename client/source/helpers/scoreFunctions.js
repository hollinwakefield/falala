const updateScore = () => {
  setScore(score + 10);
};

const updateQuestionsAnswered = () => {
  setQuestionsAnswered(questionsAnswered + 1);
};

const updateQuestionsCorrect = () => {
  setQuestionsCorrect(questionsCorrect + 1);
};

const updateAccuracy = () => {
  if (questionsAnswered > 0) {
    setAccuracy(Math.round((questionsCorrect / questionsAnswered) * 100) + "%");
  }
};

let accuracyBonusFormula = Math.round(
  (questionsCorrect / questionsAnswered) * questionsCorrect * 100
);

const getAccuracyBonus = () => {
  if (questionsCorrect / questionsAnswered > 0.7) {
    setAccuracyBonus(accuracyBonusFormula);
  } else {
    setAccuracyBonus(0);
  }
};

const getTotalScore = () => {
  if (questionsCorrect / questionsAnswered > 0.7) {
    setTotalScore(score + accuracyBonusFormula);
  } else {
    setTotalScore(score);
  }
};
