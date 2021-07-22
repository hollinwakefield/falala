const getToneText = (tone) => {
  let toneText = "";
  if (tone === 1) {
    toneText = "1st tone";
  } else if (tone === 2) {
    toneText = "2nd tone";
  } else if (tone === 3) {
    toneText = "3rd tone";
  } else if (tone === 4) {
    toneText = "4th tone";
  } else {
    toneText = "neutral tone";
  }
  return toneText;
};

export default getToneText;
