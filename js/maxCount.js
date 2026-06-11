const maxCount = (array) => {
  if (array.length === 1) {
    return 1;
  } else {
    array.shift();
    return 1 + maxCount(array);
  }
}


console.log(maxCount([1,2,3,4]));