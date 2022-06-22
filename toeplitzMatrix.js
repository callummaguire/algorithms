const toeplitz = [
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [9, 5, 1, 2],
];

const isToeplitzMatrix = (matrix) => {
  const startingPoint = { x: matrix.length - 1, y: 0 };

  const currentNumber = toeplitz[startingPoint.x -1][startingPoint.y];

  for (let i = matrix.length -1; i--;) {
       
    console.log(i, matrix[i][i],isNumberTheSame({x: i, y: i, },  matrix, 5));
  }
  
  console.log(isNumberTheSame({x: startingPoint.x, y: startingPoint.y + 1}, matrix, currentNumber));

};

const isNumberTheSame = (point, matrix, number) => {
  if (point.x < 0 || point.x > matrix.length || point.y < 0 ||point.y > matrix[0].length ) {
    return;
  }  
  if (matrix[point.x][point.y] === number) {
    return true;
  }
    return false;
} 



isToeplitzMatrix(toeplitz);
