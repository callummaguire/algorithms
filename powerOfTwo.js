const powerOfTwo = (target) => {
  if (target === 0) {
    return 1;
  }

  return 2 * powerOfTwo(target -1)
}

console.log(powerOfTwo(4));