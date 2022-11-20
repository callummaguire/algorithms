const dfs = (currentI, n, result) => {
  if (currentI <= n) {
    result.push(currentI);

    for (let i =0; i < 10; i++) {
      if (10 * currentI + i <= n ) {
        dfs(10* currentI + i, n, result)
      }
    }
  }
}


const lexicalOrder1 = (n) => {
  let result = [];
  for (let i=1; i<10; i++) {

    dfs(i, n, result)
  }
  return result;
}

console.log(lexicalOrder1(10000).at(-1), 9)


const normalIncrease = (n, result) => {
    for (let i= n; i < n + 9; i++) {
      result.push(i);
    }
}
const lexicalOrder = (n) => {
  let i = 1;
  const result = [];
  result.push(i);
  
  while (i < n) {
    i = i * 10;
    
    result.push(i);
  }
  let decreaseI = i / 10;
  normalIncrease(decreaseI, result);

  let decreaseIAgain = i / 10;


  console.log(result);
} 

console.log(lexicalOrder(10000))

 