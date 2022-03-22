function Milestone(points, children = []) {
  this.points = points;
  this.children = children;
}

const maze = new Milestone(1, [
  new Milestone(1, [new Milestone(5), new Milestone(10)]),
  new Milestone(3, [new Milestone(7)]),
]);

function _findMaxPoints(maze, p) {
  const branches = maze.children.map((elem) =>
    _findMaxPoints(elem, maze.points + p)
  );

  return branches.length ? Math.max(...branches) : maze.points + p;
}

function findMaxPoints(maze) {
  return _findMaxPoints(maze, 0);
}

console.log(findMaxPoints(maze));
