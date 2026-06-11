/* 
  place: leetcode
  difficult level: easy
  url: https://leetcode.com/problems/binary-search/
  tag: [binary search, recursive]
*/

const search1 = (array, target, start, end) => {
  if (start > end ) {
    return -1;
  } 

  const mid = Math.floor((start +  end) / 2)
  console.log(mid, array[mid]);
  if (array[mid] === target) {
    return mid;
  }

  if (array[mid] > target) {
    //go down
    return search1(array, target, start, mid -1)
  } else {
    // go up

    return search1(array, target, mid + 1, end)
  }
}

const search = (array, target) => {
  return search1(array, target, 0, array.length)
}


console.log(search([1,2,3,4,5,6,7,8,9,10,11,12],1), 1);
