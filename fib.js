const input = 8;
const output = [1,1,2,3,5,8,13];

const inputFib = (input) => {
  return fib(input);
}

const fib = (numb) => {
  if (numb <= 2) {
    return 1;
  }

  return fib(numb - 1) + fib(numb - 2); 
}

console.log(inputFib(7))
console.log(inputFib(50));