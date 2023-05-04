const node = (val, left, right) => ({
  val: val,
  left: left === undefined ? null : left,
  right: right === undefined ? null : right,
});

const tree = node(5, node(2), node(6));

const recursiveParentFirstThenLeft = (newNode) => {
  console.log(newNode.val);

  if (newNode.left) {
    recursiveParentFirstThenLeft(newNode.left);
  }

  if (newNode.right) {
    recursiveParentFirstThenLeft(newNode.right);
  }
};

const recursiveLeftFirst = (newNode) => {
  if (newNode.left) {
    recursiveLeftFirst(newNode.left);
  }

  console.log(newNode.val);

  if (newNode.right) {
    recursiveLeftFirst(newNode.right);
  }
};

const recursiveWithArray = (newNode, array) => {
  if (newNode.left) {
    recursiveWithArray(newNode.left, array);
  }

  array.push(newNode.val);

  if (newNode.right) {
    recursiveWithArray(newNode.right, array);
  }

  return array;
};

console.log(recursiveParentFirstThenLeft(tree));
console.log(recursiveLeftFirst(tree));
console.log(recursiveWithArray(tree, []), [2,5,6])
