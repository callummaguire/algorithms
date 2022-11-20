/*
  place: leetcode
  difficult level: easy
  url: https://leetcode.com/problems/binary-tree-inorder-traversal/
  tag: [Binary tree]
*/

const traversal = (root, array) => {
  if (root != null) {
    if (root.left != null) {
      traversal(root.left, array);
    }

      array.push(root.val);

    if (root.right != null) {
      traversal(root.right, array);
    }
  }
  return array;
};

const inorderTraversal = (root) => {
  return traversal(root, []);
};

console.log(inorderTraversal({val: 1, left: {
  val: 2
}, right: {
  val: 3
}}));