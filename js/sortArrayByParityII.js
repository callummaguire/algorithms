const swap = (array, index1, index2) => {
  const value1 = array[index1];
  const value2 = array[index2];
  array[index1] = value2;
  array[index2] = value1;
  return array;
}

const sortArrayByParityII = (nums) => {
  const arrayOfOdd = [];
  const arrayOfEven = [];

  for (let i =0; i < nums.length; i++) {
    if ((i % 2) === 0 && (nums[i] % 2) === 1) {
       if (arrayOfOdd.length === 0) { 
          arrayOfEven.push({value: nums[i], index: i })
        } else {
          const arrayValue = arrayOfOdd.pop();
          swap(nums, arrayValue.index, i);
        }
    }
    
    if ((i % 2) === 1 && (nums[i] % 2) === 0 ) {
      if (arrayOfEven.length === 0) {
          arrayOfOdd.push({value: nums[i], index: i })
        } else {
            const arrayValue = arrayOfEven.pop();
          swap(nums, arrayValue.index, i);
      
        }   
    }

  }
  return nums;
}

console.log(sortArrayByParitryII([4,2,5,7]));