
/*
  place: leetcode
  difficult level: medium
  url: https://leetcode.com/problems/binary-tree-level-order-traversal/?envType=study-plan&id=level-1
  tag: [tree, breadth-first search]
*/



const  preOrder = (node, masterMap, level) => {
  if (node === null) {
    return;
  }
  if (!masterMap[level]) {
    let array = [];
    array.push(node.val)
    masterMap[level] = array;
  } else {
    const array = masterMap[level];
    array.push(node.val)
  }
  preOrder(node.left, masterMap, level + 1);
  preOrder(node.right, masterMap, level + 1);
} 

const levelOrder = (root) => {
  if (root === null) {
    return [];
  }

  let masterMap = {};

  preOrder(root, masterMap, 1)

  return Object.keys(masterMap).map((key) => {
        return masterMap[key];
  })
}


console.log(levelOrder({val: 1, left: null, right: null}), [1]);