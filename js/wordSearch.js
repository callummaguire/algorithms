const spread = (board, word, i, j, pointer) => {
  if (pointer === word.length) {
    return true;
  }

  if (
    i < 0 ||
    i === board.length ||
    j < 0 ||
    j === board.length ||
    board[i][j] !== word.charAt(pointer)
  ) {
    return false;
  }

  let temp = board[i][j];
  board[i][j] = "0";

  let spread1 = spread(board, word, i + 1, j, pointer +1);

  // going up

  let spread2 = spread(board, word, i - 1, j, pointer + 1);

  // going right

  let spread3 = spread(board, word, i, j + 1, pointer +1);

  // going left

  let spread4 = spread(board, word, i, j - 1, pointer +1);

  board[i][j] = temp;

  return spread1 || spread2 || spread3 || spread4;
};

const exist = (board, word) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word.charAt(0)) {
        if (spread(board, word, i, j, 0))  {
          return true;
        }
       
      }
    }
  }
  return false;
};

console.log(
  exist(
    [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
"ABCB"
    
  ),
  false
);
