const sortColorsFP = (nums) => {
  var hashmap = { 0: 0, 1: 0, 2: 0 };

 for (let i = 0; i < nums.length; i++) {
   hashmap[[nums[i]]] = hashmap[[nums[i]]] += 1;
 }

 return [
   ...Array(hashmap[0]).fill(0),
   ...Array(hashmap[1]).fill(1),
   ...Array(hashmap[2]).fill(2),
 ];
};

const inputArray = [2,0,2,1,1,0];


const sortColors = (nums) => {
  var hashmap = { 0: 0, 1: 0, 2: 0 };

  for (let i = 0; i < nums.length; i++) {
    hashmap[[nums[i]]] = hashmap[[nums[i]]] += 1;
  }

  for (let i =0; i< nums.length; i++) {

    if (hashmap['0']) {
      nums[i] = 0;
      hashmap['0'] = hashmap['0'] - 1;
      continue;
    }

    if (hashmap['1']) {
      nums[i] = 1;
      hashmap['1'] = hashmap['1'] - 1;
      continue;
    }

    if (hashmap['2']) {
      nums[i] = 2;
      hashmap['2'] = hashmap['2'] - 1;
      continue;
    }
  }

  return nums;
}
