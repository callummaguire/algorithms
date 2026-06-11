const travesal = (p, q) => {

 
  if (p === q && p.val !== q.val) {
    return false;
  }
  if (p.left !== q.left ) {
    return false;
  }
  if (p.left !== null && q.left !== null) {
    travesal(p.left, q.left);
  }
  
  if (p.right !== q.right) {
    return false;
  }
  if (p.right !== null && q.right !== null) {
    travesal(q.right, q.right);
  }
}

const isSameTree = (p, q) => {
  const check = travesal(p,q) ;
  return check === undefined ? true : false
}