/*
  place: crack the coding interview
  difficult level: easy
  tag: [sorting] 

*/

const bubbleSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {    
    for (let j = 0; j < nums.length; j++) {

      if (i === j) {
        continue;
      }
      if (nums[i] > nums[j]) {
        const biggerNum = nums[i];
        const smallerNum = nums[j];

        nums[i] = smallerNum;
        nums[j] = biggerNum;
      }
    }
  }
  return nums;
}

console.log(bubbleSort([5,2,1,4,3]))