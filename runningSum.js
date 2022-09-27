const runningSum = (nums) => {
  return nums.reduce((acc, num) => {
    if (acc.length === 0) {
      return [num];
    } else {
      const value = acc.at(-1);
      return [...acc, value+ num];
    }
  }, [])
}

console.log(runningSum([1,2,3,4]))