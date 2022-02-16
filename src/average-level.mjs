/*
Given a binary tree, get the average value of the nodes on each level.

Input:

     4
    / \
   7   9
 / \   / \
   10 2   6
       \
        6
       /
     2
Output: [4, 8, 6, 6, 2]
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addLeft(value) {
    this.left = new Node(value);
    return this.left;
  }

  addRight(value) {
    this.right = new Node(value);
    return this.right;
  }

  getLeft() {
    return this.left;
  }

  getRight() {
    return this.right;
  }

  getValue() {
    return this.value;
  }

  setValue(value) {
    this.value = value;
  }
}

export function createTree() {
  const root = new Node(4);
  root.addLeft(7);
  root.addRight(9);
  const secondLevelLeft = root.getLeft();
  const secondLevelRight = root.getRight();
  secondLevelLeft.addLeft(10);
  secondLevelRight.addLeft(2);
  secondLevelRight.addRight(6);
  const thirdLevelLeft = secondLevelRight.getLeft();
  thirdLevelLeft.addRight(6);
  const fourthLevelRight = thirdLevelLeft.getRight();
  fourthLevelRight.addLeft(2);
  return root;
}

// helper function to get the average of the nodes on each level
function collect(node, res = [], level = 0) {
  if (node === null) {
    return res;
  }

  let [elem, sum] = res[level] ? res[level] : [0, 0];
  elem += 1;
  sum += node.getValue();
  res[level] = [elem, sum];

  collect(node.getLeft(), res, level + 1);
  collect(node.getRight(), res, level + 1);

  return res;
}

export function getAverage(root) {
  const res = collect(root);

  return res.map((e) => e[1] / e[0]);
}

const tree = createTree();
console.log(getAverage(tree));
