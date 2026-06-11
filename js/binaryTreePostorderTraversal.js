
const traversal = (root, array) => {
  if (root != null) {
    
    if (root.left != null) {
      traversal(root.left, array);
    }
    
    
    
    
    if (root.right != null) {
      traversal(root.right, array)
    }
    
  if (root.val !== null) {
    array.push(root.val);
  }
}
return array;
}


const postorderTraversal = (root) => {
return traversal(root, []);  
}