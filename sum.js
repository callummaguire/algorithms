const sum = (array) => {
  if (array.length === 0) {
    return 0;
  } else {
    const firstElement = array.shift();
    return firstElement + sum(array);
  }
}

console.log(sum([1,2,3,4,5]));