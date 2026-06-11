const matrix = [[3,7,8],[9,11,13],[15,16,17]]

const hashmap = {};

const luckyNumbers = (matrix) => {
  let minValue = Number.MAX_SAFE_INTEGER;
  const minValueArray = []; 
  let maxValue = Number.MIN_SAFE_INTEGER;
  const maxValueArray = [];   
  for (let i = 0; i < matrix.length; i++ ) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < minValue) {
        minValue = matrix[i][j];
      }
    if (matrix[i][j] > maxValue) {
        maxValue = matrix[i][j];
      }
    };
    minValueArray.push(minValue);
    minValue = Number.MAX_SAFE_INTEGER;
  }

  console.log(minValueArray);
}


luckyNumbers(matrix)