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

