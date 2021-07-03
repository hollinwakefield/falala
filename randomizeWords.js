const randomizedWordList = [];

const randomizeWords = (wordList) => {
  const slicedWordList = wordList.slice();
  for (let i = 0; i < wordList.length; i++) {
    let indexToSlice = Math.floor(Math.random() * slicedWordList.length);
    randomizedWordList.push(slicedWordList[indexToSlice]);
    slicedWordList.splice(indexToSlice, 1);
  }
  return randomizedWordList;
};
