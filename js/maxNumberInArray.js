const maxNumberInArray = (array, currentMax) => {
    if (array.length === 0) {
      return currentMax;
    } else {
      const firstElement = array.shift();
      const max = firstElement > currentMax ? firstElement : currentMax;
      return maxNumberInArray(array, max);
    }
}

console.log(maxNumberInArray([1,2,3,4,5], 0));