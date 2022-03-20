/*

You are given an M by N matrix consisting of booleans that represents a board.
Each True boolean represents a wall. Each False boolean represents a tile you can walk on.

Given this matrix, a start coordinate, and an end coordinate, return the minimum number
of steps required to reach the end coordinate from the start. If there is no possible path, then return null.
You can move up, left, down, and right. You cannot move through walls. You cannot wrap around the edges of the board.

For example, given the following board:

[[f, f, f, f],
[t, t, f, t],
[f, f, f, f],
[f, f, f, f]]

and start = (3, 0) (bottom left) and end = (0, 0) (top left),
the minimum number of steps required to reach the end is 7,
since we would need to go through (1, 2) because there is a wall everywhere else on the second row.

*/

function calculateStep(board, x, y, end, steps = 0, memo = {}) {
  if (x === end[1] && y === end[0]) return steps;

  if (x >= 0 && y >= 0 && y < board.length && x < board[0].length) {
    const position = `${x}${y}`;

    if (memo[position] && memo[position] < steps) return Number.MAX_VALUE;

    if (board[y][x] === false) {
      memo[position] = steps;
      steps += 1;

      return Math.min(
        calculateStep(board, x + 1, y, end, steps, memo),
        calculateStep(board, x - 1, y, end, steps, memo),
        calculateStep(board, x, y + 1, end, steps, memo),
        calculateStep(board, x, y - 1, end, steps, memo)
      );
    }
  }

  return Number.MAX_VALUE;
}
function minimumSteps(board, start, end) {
  const result = calculateStep(board, start[0], start[1], end);

  return result === Number.MAX_VALUE ? null : result;
}

const board = [
  [false, false, false, false],
  [true, true, true, false],
  [false, false, false, false],
  [false, false, false, false],
];

const start = [0, 3];
const end = [0, 0];

console.log(minimumSteps(board, start, end));
