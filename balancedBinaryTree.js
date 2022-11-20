const traversal = (root, counter) => {
  if (root.left !== null) {
    traversal(root.left, counter);
  }

  counter++;

  if (root.right != null) {
    traversal(root.right, counter);
  }
};

const isBalanced = (root) => {
  if (root === null) {
    return true;
  }

  let leftDepthCounter = 0;

  let rightDepthCounter = 0;

  if (root.left !== null) {
    leftDepthCounter = traversal(root.left, leftDepthCounter);
  }

  if (root.right != null) {
    rightDepthCounter = traversal(root.right, rightDepthCounter);
  }

  return Math.abs(leftDepthCounter - rightDepthCounter) <= 1 ? true : false;
};
