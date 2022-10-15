const minCostClimbingStairs = (costs) => {
  let total = 0
  let pointer = 0;
  while (pointer < costs.length) {
    let firstPointer = pointer;
    let secondPointer = pointer + 1;

    if (!(costs[firstPointer] && costs[secondPointer])) {
      return total;
    }
    if (costs[firstPointer] < costs[secondPointer]) {
      console.log(firstPointer);
      total += costs[firstPointer];
      pointer++;
      
    } else {
      console.log(secondPointer);
      total += costs[secondPointer];
      pointer = pointer + 1;
    }
  }

  return total
}

console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]), 15);


const minCostClimbingStairs1 = (cost) => {
	const dpArray = [];

	for (let i=0; i<cost.length; i++) {
		if (i<2) {
      dpArray[i] = cost[i];
    } else {
      dpArray[i] = cost[i] + Math.min(dpArray[i-1], dpArray[i-2]);
    }
	}

	return Math.min(dpArray[cost.length-1], dpArray[cost.length-2]);
}


console.log(minCostClimbingStairs1([1,100,1,1,1,100,1,1,100,1]), 15);