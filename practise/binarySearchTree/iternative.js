const node = (val, left, right) => ({
  val: val,
  left: left === undefined ? null : left,
  right: right === undefined ? null: right,
});

const tree = node(5, node(2), node(6))


const iternativeSolution = () => {

  const stack = [];

  stack.push(tree);
  while (stack.length > 0) {
    const newNode = stack.pop();
    
    console.log(newNode.val);

    if (newNode.left) {
      stack.push(newNode.left);
    }

    if(newNode.right) {
      stack.push(newNode.right);
    }
  }

  console.log(stack);
} 

iternativeSolution()