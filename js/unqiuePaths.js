const uniquePaths = (m,n) => {
  const array = Array(m).fill(Array(n).fill(1));

  for(let i =1; i< m; i++) {
    for(let j = 1; j <n; j++) {
      array[i][j] = array[i -1][j] + array[i][j -1];
    }
  }

  return array[m-1][n -1];
}

console.log(uniquePaths(3,7));