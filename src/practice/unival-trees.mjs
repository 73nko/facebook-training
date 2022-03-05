class Tree {
  constructor(value) {
    this.value = value;

    this.left = null;
    this.right = null;
  }

  addLeft(value) {
    this.left = new Tree(value);
  }

  addRight(value) {
    this.right = new Tree(value);
  }
}

function helper(root) {
  if (!root) return [0, true];

  const [rightCount, isRightUnival] = helper(root.right);
  const [leftCount, isLeftUnival] = helper(root.left);

  const total = rightCount + leftCount;
  if (isLeftUnival && isRightUnival) {
    if (root.right && root.right.value !== root.value) return [total, false];

    if (root.left && root.left.value !== root.value) return [total, false];

    return [total + 1, true];
  }

  return [total, false];
}

function countUnivals(root) {
  const [count] = helper(root);

  return count;
}

/*
  0
 / \
1   0
   / \
  1   0
 / \
1   1

*/
const root = new Tree(0);

root.addLeft(1);
root.addRight(0);

root.left.addLeft(0);
root.left.addRight(1);

root.left.right.addRight(1);
root.left.right.addLeft(1);

console.log(countUnivals(root));
