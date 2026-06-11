const maxProfit = (prices) => {

  let array = [];
  for (let i = 0; i < prices.length; i++) {
    let buyingPoint = prices[i];
    for (let j = i; j < prices.length; j++) {
      if (i !== j) {
        array.push((-buyingPoint) + prices[j] );
      }
    }
  }

  const value = Math.max(...array)
  return value > 0 ? value : 0; 
}

console.log(maxProfit([7,1,5,3,6,4]), 5)


const maxProfit1 = (prices) => {
  let total =0;
  let min = 10000000000000000000;

  for (let i = 0; i < prices.length; i++) {
  
    if(prices[i] < min) {
      min = prices[i];
    } else {
      total = Math.max( total, prices[i] - min);
     } 
  }

  return total;
}

console.log(maxProfit1([7,1,5,3,6,4]), 5)