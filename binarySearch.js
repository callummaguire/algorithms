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


console.log(binarySearch([-10,3,5,9,12]), 4);
