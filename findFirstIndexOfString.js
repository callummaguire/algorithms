const findFirstIndexOfString = (stringPossible, stringFound) => {
  if (
    stringPossible.length === 1 &&
    stringFound.length === 1 &&
    stringPossible[0] === stringFound[0]
  ) {
    return 0;
  }
  const firstLetterOfStringFound = stringFound[0];

  for (let i = 0; i < stringPossible.length; i++) {
    if (stringPossible[i] === firstLetterOfStringFound) {
      for (let j = 1; j < stringFound.length; j++) {
        if (stringFound[j] === stringPossible[i + j]) {
        } else {
          break;
        }

        if (j === stringFound.length - 1) {
          return i;
        }
      }
      if (stringFound.length === 1) {
        return i;
      }
    }
  }

  return -1;
};

console.log(findFirstIndexOfString("haystack", "needle"), -1);

console.log(findFirstIndexOfString("callum", "callum"), 0);

console.log(findFirstIndexOfString("afootball", "football"), 1);

console.log(findFirstIndexOfString("abc", "c"), 0);
