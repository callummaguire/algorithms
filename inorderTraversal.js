
let BST = new BinarySearchTree();
BST.insertRec(10);
BST.insertRec(15);
BST.insertRec(5);
BST.insertRec(50);
BST.insertRec(3);
BST.insertRec(7);
BST.insertRec(12);
BST.inOrder();

const inorderTraversal = (root) => {
    const arr = [];  
    swapFunction(root,arr);
    return arr;
};

const swapFunction = (root,arr) => {
  if (root !== null) {
    swapFunction(root.left, arr)
    arr.push(root.val)
    swapFunction(root.right, arr)
  }
}

inorderTraversal({val: 1, left: {
  val: 2
}, right: {
  val: 3
}})