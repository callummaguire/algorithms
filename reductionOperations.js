const reductionOperations = (nums) => {
  const sortNums = nums.sort((a,b)  => a -b);
  console.log(sortNums);

  let lowestNumer = sortNums[0];
  
  let total = 0;

  for (let i= nums.length - 1; i >0; i--) {
    if (nums[i] === lowestNumer) {
      return total;
    }
    if (nums[i] !== nums[i -1]) {
        total = total + ((nums.length - i));
    }
  }
  return total

}

console.log(reductionOperations([1,1,1]), 0);
console.log(reductionOperations([5,1,3]), 3);
console.log(reductionOperations([1,1,2, 2,3]), 4);

console.log(reductionOperations([7,9,10,8,6,4,1,5,2,3]), 45);
console.log(reductionOperations([2850,2850,2850,2850,2850,2850,2850,2850,2850,20220,2850]), 1)