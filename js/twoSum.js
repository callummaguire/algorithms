/*
  place: leetcode
  difficult level: easy
  url: https://leetcode.com/problems/two-sum/?envType=study-plan&id=level-1
  tag: [hashmap]

  solution On2
  1) take the element in the array 
  2) mince that to the target 
  3) loop over the other numbers and check if it is there
  4) return i and j

*/



const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
      let minceTarget = target - nums[i];

      for (let j = 0; j < nums.length; j++) {
        if (i ==j){
          continue
        }
        if (minceTarget === nums[j]){
          return [i,j];
        }
      }
    }
    return null;
}

console.log(twoSum([2,7,11,15], 9));

/*

  nums= [2,7,11,15]
  expected output: 9

  first iteration:
  9-2

  minceTarget = 7

  inner for loop

  first iteration 
  i = 0 and j = 0

  second iteration 
  minceTarget = 7 and nums[j] = 7

  return [i,j]
  

  */