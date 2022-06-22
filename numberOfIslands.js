const spreadGrid = (grid, i, j) => {
    
  if (i < 0 || j < 0 || i>= grid.length || j >= grid[i].length) {
      return 0;        
  }

  if (grid[i][j] === "0") {
    return 0;
  }
  
  grid[i][j] = "0"
  
  // north
      spreadGrid(grid, i + 1, j);
  // south
      spreadGrid(grid, i - 1, j);
  // east 
      spreadGrid(grid, i, j + 1);
  // west
      spreadGrid(grid, i, j -1);
  return 1;
}



const numIslands = (grid) => {
  const count = 0;
  for (let i = 0; i < grid.length; i++) {
      for (let j =0; j < grid[i].length; j++) {
          if (grid[i][j] === "1") {
           count += spreadGrid(grid, i, j);   
          }
      }
  }
  return count
};