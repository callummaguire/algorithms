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

  console.log(dpArray)

	return Math.min(dpArray[cost.length-1], dpArray[cost.length-2]);
}


console.log(minCostClimbingStairs1([1,100,1,1,1,100,1,1,100,1]), 6);


/*
  cost = [10, 15,20]

  expected output: 15
  as you pay 15 and climb two steps to reach the top

  first iteration
  i = 0 
  i < 2 => true
  dpArray[i] = 10

  --------------------------------------------------------------

  second iteration
  i = 1
  i < 2 => true
  dpArray[i] = 15

  comments this is the two starting points

  ----------------------------------------------------------------

  third iteration

  i = 2
  i< 2 => false
  dpArray[i] = 20 + 10 || 20 => 20 + 10;
  dpArray[i] = 30

  ----------------------------------------------------------------

  out of loop
  return Math.min(dpArray[2], dpArray[1]);

  return Math.min(30, 15)

  return 15;

*/


/*

  cost: [1, 100, 1,1,1,100, 1, 1,100, 1]
  expected output is 6


  first two loops makes a dpArray equal = [1, 100];

  ------------
  dpArray[0] = 1
  dpArray[1] = 100
  
  i = 2 
  else 
  dpArray[2] = 1 + Math.min(dpArray[0], dpArray[1]);
  dpArray[2] = 1 + 1;
  dpArray[2] = 2

 -------------------------------------------------------
  dpArray[0] = 1
  dpArray[1] = 100
  dpArray[2] = 2

  i = 3 
  else 
  dpArray[3] = 1 + Math.min(dpArray[1], dpArray[2]);
  dpArray[3] = 1 + 2
  dpArray[3] = 3

 ------------------------------------------------------

  i = 4
  else 
  dpArray[4] = 1 + Math.min(dpArray[2], dpArray[3]);
  dpArray[4] = 1 + 2
  dpArray[4] = 3

  ------------------------------------------------------

  i= 5
  else 
  dpArray[5] = 100 + Math.min(dpArray[3], dpArray[4]);
  dpArray[5] = 100 + 3
  dpArray[5] = 103

  ----------------------------------------------------

  i=6 
  else 
  dpArray[6] = 1 + Math.min(dpArray[4], dpArray[5])
  dpArray= 1 + 3
  dpArray[6] 4

  -------------------------------------------------------

  i= 7
  else 
  dpArray[7] = i + Math.min(dpArray[5], dpArray[6])
  dpArray[7]= 1+ 4
  dpArray[7] = 5


  --------------------------------------------------------

  i=8 
  else 
  dpArray[8] = i + Math.min(dpArray[6], dpArray[7])
  dpArray[8] = 100 + 4
  dpArray[8] = 104

  ------------------------------------------------------

  i=9 
  else 
  dpArray[9] = i + Math.min(dpArray[7], dpArrau[8])
  dpArray[9] = 1+ 5
  dpArray[9] = 6;

  -----------------------------------------------------

  out of loop
  dpArray[10 -1 = 9, 10 - 2 = 8]
  Math.min( 104, 6)
  return 6;
*/