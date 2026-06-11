const lowestCommonAncestory = (tree, p ,q) => {
  if (tree.val < p && tree.val < q) {
    return lowestCommonAncestory(tree.left, p ,q)
  } else if (tree.val> p && tree.val > q) {
    return lowestCommonAncestory(tree.right, p , q);
  } else {
    return tree
  }
}