const isSubsequence = (s, t) => {
  const stack = s.split("");
  const arrayT = t.split("");

  for (let i =0; i < t.length; i++) {
    if (arrayT[i] === stack[0]) {
      stack.shift();
    }
    console.log(stack);
  }

  console.log(stack.length)
  return stack.length > 0 ? false : true;
}

console.log(isSubsequence("axc", "ahbgdc"))