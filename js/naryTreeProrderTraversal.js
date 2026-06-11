const recurison = (node, array) => {
  if (node === null) {
    return;
  }
  if (node.val) {
    array.push(node.val)
  }
  
  for (let i=0; i < node.children.length; i++) {
    recurison(node.children[i], array)
  }
}

const preorder = (root) => {
  let array = [];

  recurison(root,array);
  
  return array;
}


console.log(preorder({
  val: 1,
  children: [
    { val: 3, children: [{val: 5, children: []}, {val: 6, children: []}] },
    { val: 2, children: [] },
    { val: 4, children: [] }
  ]
}), [1,3,5,6,2,4])