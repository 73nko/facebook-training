const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

const dfs = (board, i, j, count, word) => {
  if (count === word.length) return true;

  const row = board.length;
  const col = board[0].length;
  if (
    i < 0 ||
    i >= row ||
    j < 0 ||
    j >= col ||
    board[i][j] !== word.charAt(count)
  )
    return false;

  const temp = board[i][j];
  board[i][j] = " ";

  const found =
    dfs(board, i + 1, j, count + 1, word) || // left
    dfs(board, i - 1, j, count + 1, word) || // right
    dfs(board, i, j + 1, count + 1, word) || // up
    dfs(board, i, j - 1, count + 1, word); // down

  board[i][j] = temp;
  return found;
};

const exists = (board, word) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word.charAt(0) && dfs(board, i, j, 0, word)) {
        return true;
      }
    }
  }
  return false;
};

console.log(exists(board, "ABCCED")); // returns true
console.log(exists(board, "SEE")); // returns true
console.log(exists(board, "ABCB")); // returns false
