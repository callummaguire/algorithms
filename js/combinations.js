
const backtrack = (start, curr, subset, lowerBound, upperBound) => {
   if (curr.length == upperBound) {
    subset.push([...curr])
    return;
   }

   for (let i = start; i <= lowerBound; i++) {
      curr.push(i);
      backtrack(i + 1, [...curr], subset, lowerBound, upperBound);
      curr.pop();
   }

}

var combine = function(n, k) {
  let subset = [];

  backtrack(1,  [] , subset, n, k);

  return subset;
};

console.log(combine(4, 2), [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]);