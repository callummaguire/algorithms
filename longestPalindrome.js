const longestPalindrome = (s) => {

  const hashMap = {};
  let sArray = s.split("");
  if (sArray.length === 1) {
    return 1;
  }
  let numberOfPairs = 0;
  for (let i= 0; i < sArray.length; i++) {
    if (!hashMap[sArray[i]]) {
      hashMap[sArray[i]] = 1;
    } else {
      delete hashMap[sArray[i]];
      numberOfPairs +=2;
    }  
  }

  const extraLetterPalindrome = numberOfPairs +1;
  
  return Object.keys(hashMap).length === 0 ? numberOfPairs : extraLetterPalindrome;
}

console.log(longestPalindrome("bb"), 7);