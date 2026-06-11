const isValid = (s) => {
  const arr = s.split("");
  const stack = [];

  if (arr.length === 1) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ')') {
        if (stack[stack.length -1] === "(") {
          stack.pop();
        } else {
          return false
        }
    } else if (arr[i] === ']') {
        if (stack[stack.length -1] === "[") {
          stack.pop();
        } else {
          return false
        }
    } else if (arr[i] === '}') {
        if (stack[stack.length -1] === "{") {
          stack.pop();
        } else {
          return false
        }
    } else {
      stack.push(arr[i])
    }
  }

  return stack.length ? false : true
}

console.log(isValid("()"));

console.log(isValid("()[]{}"))

console.log(isValid("(]"))

console.log(isValid(")(){}"))