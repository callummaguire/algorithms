/*
  place: leetcode
  difficult level: easy
  url: https://leetcode.com/problems/contains-duplicate/?envType=study-plan&id=data-structure-i
  tag: [hashmap]

1) hashmap 
2) loop all items
3) add to hashmap
4) if they are already in the hashmap return false
5) return true 

*/


const containsDuplicate = (nums) => {

  let hashmap = {};

  for (let i = 0; i < nums.length; i++) {
    if (hashmap[nums[i]]) {
      return true
    } else {
      hashmap[nums[i]] = 1;
    }
  }
  return false;
}

/*
  runtime:

  nums = [1, 2,3,1]
  hashmap = {}
  if (hashmap[1]) -> line 21 hashmap[1] =1;


  ---------------------------------------------

  nums = [2,3,1] 
  hashmap = {1: 1}
  if (hashmap[2]) -> undefined -> line 21 hashmap[2] = 1;

  ------------------------------------------------------

  nums = [3,1] 
  hashmap = {1: 1, 2: 1}
  if (hashmap[3]) -> undefined -> line 21 hashmap[3] = 1;

  ----------------------------------------------------------

  
  nums = [1] 
  hashmap = {1: 1, 2: 1, 3:1}
  if (hashmap[1]) => 1 => return false

  */