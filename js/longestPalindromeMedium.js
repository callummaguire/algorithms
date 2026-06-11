const isPalindrome = (stringArray, i, j) => {
  while (i < j) {
    if (stringArray[i] === stringArray[j]) {
      i++;
      j--;
    } else {
      return false
    }
  }
  return true;
}

const swapPalinedromic = (stringArray, i, j, currentMax, result) => {
  if (isPalindrome(stringArray, i, j) && j - i > currentMax) {
    return [stringArray.slice(i,j + 1),  j - i ];
  }
  return [result, currentMax];
}



const longestPalindrome = (s) => {
    if (s.length === 1) {
        return s;
    }
  const stringArray = s.split("");

  let result = [];
  let total = -1;
  for (let i = 0; i < stringArray.length; i++) {
    for (let j = stringArray.length - 1;  j >= 0; j--) {
      if (i < j) {
        [result, total] = swapPalinedromic(stringArray, i, j, total, result);
      }
    }
  }

  return result.length === 0 ? s.charAt(0) : result.join("");
}


// const longestPalindrome = (s) => {
//   const stringArray = s.split("");

//   let result = "";
//   let total = -1;
//   for (let i = 0; i < stringArray.length; i++) {
//     let couldBePalindromic = [];
//     couldBePalindromic += stringArray[i];

//     [result, total] = swapPalinedromic(couldBePalindromic, total, result);

//     for (let j = i +1; j < stringArray.length; j++) {
//       couldBePalindromic += stringArray[j];
//      [result, total] = swapPalinedromic(couldBePalindromic, total, result);
//     }
//   }

//   return result;
// }




// const longestPalindromeMedium = (s) => {
//   let leftPointer = 0;
//   let rightPointer = s.length;
//   let currentMax = 0;
//   let result = "";

//   while (leftPointer < rightPointer) {
//     const currentString = s.charAt(leftPointer);
//     const otherString = s.charAt(rightPointer);

//     if (currentString === otherString) {

//     } else {
//       rightPointer--;
//     }
//   }
 
// }
console.log(longestPalindrome("babad"))
console.log(longestPalindrome("ccc"))