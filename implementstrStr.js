// const strStr = (haystack, needle) => {
//   let foundCount = 0;
//   let firstCountFound = 0;
//   let tempFirstCountFound = 0;

//   for (let i=0; i < haystack.length; i++) {
//     if (haystack[i] === needle[foundCount]) {
//       if (foundCount == 0) {
//         tempFirstCountFound = i;
//       }
//       if (foundCount === needle.length) {
//         firstCountFound = tempFirstCountFound;
//       }
//       foundCount++;
//     } else {
//       foundCount = 0;
//     }
//   }
//   return firstCountFound ? firstCountFound : -1
// }


/// https://leetcode.com/problems/implement-strstr/submissions/

const strStr = (haystack, needle) => {
  const needleWindow = needle.length;

  const firstFoundCharacter = needle[0];
  let count = 0;
  let firstFoundIndex = null; 

  for(let i = 0; i < haystack.length; i++) {
    if (haystack[i] === firstFoundCharacter) {
      firstFoundIndex = i;
      for (let j = 1; j < needleWindow; j++) {
        if (haystack[i] === needle[j]) {
          count++;
        } else {
          count = 0;
        }
      }
    } else {
      firstFoundIndex = null
    }
  }

  return count === needleWindow && firstFoundIndex !== null ?  firstFoundIndex : -1
}

console.log(strStr("mississippi", "issip"));