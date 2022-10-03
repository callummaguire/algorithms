const search1 = (isBadVersion, start, end, lastNumber) => {
  if (start > end) {
      return lastNumber
  }
  
  const mid = Math.floor((start + end) / 2);
  if (isBadVersion(mid)) {
      return search1( isBadVersion, start ,mid -1, mid)
  }
  return search1( isBadVersion, mid+1, end, mid+1 )
}
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      if (n === 1 && isBadVersion(n)) {
          return n
      }
      return search1(isBadVersion, 0, n);
  };
};

const badWhatever = (number) => (input) => number <= input; 


const solutionFunc = solution(badWhatever(4))

console.log(solutionFunc(5), 4);