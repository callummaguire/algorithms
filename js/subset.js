const subset = (nums) => {
  let result = []

  backtrack(nums, 0, [], result);

  return result;
}

const backtrack = (nums, i, curr, subsetResult) => {
  if (i >= nums.length) {
    subsetResult.push([...curr]);
    return;
  }
  backtrack(nums,i +1, [...curr, nums[i]], subsetResult);
  backtrack(nums, i+1, [...curr], subsetResult)
}

console.log(subset([1,2,3]))