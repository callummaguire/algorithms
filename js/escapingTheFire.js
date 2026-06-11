/*
  place: leetcode
  difficult level: hard
  url: https://leetcode.com/problems/escape-the-spreading-fire/
  tag:  []
  status: not completed
*/

const getLowestMoveTurn = (grid) => {
  const array = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (typeof grid[i][j] === "string" && grid[i][j].includes("g")) {
        const [, turn] = grid[i][j];
        if (Number(turn)) {
          array.push(Number(turn));
        }
      }
    }
  }
  console.log(array);
  return Math.min(...array);
};

const spreadTheGuy = (grid, turn) => {
  let guys = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "ng") {
        grid[i][j] = "g" + turn;
        guys.push([i, j]);
      }
    }
  }

  const guyPostion = [];

  for (let k = 0; k < guys.length; k++) {
    const [i, j] = guys[k];
    if (i - 1 >= 0 && grid[i - 1][j] === 0) {
      guyPostion.push([i - 1, j]);
    }

    if (j + 1 < grid[i].length && grid[i][j + 1] === 0) {
      guyPostion.push([i, j + 1]);
    }

    if (i + 1 < grid.length && grid[i + 1][j] === 0) {
      guyPostion.push([i + 1, j]);
    }

    if (j - 1 >= 0 && grid[i][j - 1] === 0) {
      guyPostion.push([i, j - 1]);
    }
  }

  return guyPostion;
};

const hasTheGuyGotHome = (grid) => {
  const oneDLength = grid.length;
  const twoDlength = grid[oneDLength - 1].length;

  if (grid[oneDLength - 1][twoDlength - 1] === "ng") {
    return true;
  }

  return false;
};

const findNewFiresAddToGrid = (grid, turn, output) => {
  let fires = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        fires.push([i, j]);
      }
    }
  }

  let newFires = [];
  for (let k = 0; k < fires.length; k++) {
    const [i, j] = fires[k];
    // north
    if (
      i - 1 >= 0 &&
      grid[i - 1][j] != 2 &&
      grid[i - 1][j] != 1 &&
      grid[i - 1][j] != undefined &&
      (grid[i - 1][j] === 0 ||
        grid[i - 1][j].includes("g") ||
        grid[i - 1][j] === "ng")
    ) {
      newFires.push([i - 1, j]);
    }

    // east
    if (
      j + 1 < grid[i].length &&
      grid[i][j + 1] != 2 &&
      grid[i][j + 1] != 1 &&
      grid[i][j + 1] != undefined &&
      (grid[i][j + 1] === 0 ||
        grid[i][j + 1].includes("g") ||
        grid[i][j + 1] === "ng")
    ) {
      newFires.push([i, j + 1]);
    }

    // south
    if (
      i + 1 < grid.length &&
      grid[i + 1][j] != 2 &&
      grid[i + 1][j] != 1 &&
      grid[i + 1][j] != undefined &&
      (grid[i + 1][j] === 0 ||
        grid[i + 1][j].includes("g") ||
        grid[i + 1][j] === "ng")
    ) {
      newFires.push([i + 1, j]);
    }

    // west
    if (
      j - 1 >= 0 &&
      grid[i][j - 1] != 2 &&
      grid[i][j - 1] != 1 &&
      grid[i][j - 1] != undefined &&
      (grid[i][j - 1] === 0 ||
        grid[i][j - 1].includes("g") ||
        grid[i][j - 1] === "ng")
    ) {
      newFires.push([i, j - 1]);
    }
  }

  const guyPostion = spreadTheGuy(grid, turn);

  if (guyPostion.length) {
    for (let k = 0; k < guyPostion.length; k++) {
      const [i, j] = guyPostion[k];

      grid[i][j] = "ng";
    }
  } else {
    /// guy has burned
    return { grid, stop: true, output: -1 };
  }

  if (newFires.length) {
    for (let k = 0; k < newFires.length; k++) {
      const [i, j] = newFires[k];
      
      grid[i][j] = 1;

    }
  } else {
    // fire cant spread
    return { grid, stop: true, output: 1000000000 };
  }

    if (grid[0][0] === 1 && output === 0 ) {
      var output = getLowestMoveTurn(grid);
    }

  console.log(turn, "turn");
  console.table(grid);
  console.log("--------------------------------------------");

  const hasGuyGotHome = hasTheGuyGotHome(grid);

  if (hasGuyGotHome) {
    console.log("here");
    return { grid, stop: true, output };
  }

  return { grid, stop: false, output };
};

const maximumMinutes = (grid) => {
  let grids = [];
  var stop = false;
  grid[0][0] = "ng";
  let turn = 0;
  var output = 0;
  while (!stop) {
    grids.push(grid);
    var { grid, stop, output } = findNewFiresAddToGrid(grid, turn, output);
    turn++;
  }
  console.table(grid);
  console.log(output, "output");
  return output;
};

maximumMinutes([
  [0, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 2, 2, 1, 0],
  [0, 2, 0, 0, 1, 2, 0],
  [0, 0, 2, 2, 2, 0, 2],
  [0, 0, 0, 0, 0, 0, 0],
]);

const output = [
  ["g", 2, "g", 0, 0, 1, 0],
  ["g", "g", "g", 2, 2, 1, 1],
  ["g", 2, "g", 1, 1, 2, 0],
  ["g", "g", 2, 2, 2, "g", 2],
  ["g", "g", "g", "g", "g", "g", "g"],
];
