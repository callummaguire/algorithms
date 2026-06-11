const input = 8;
const output = [1,1,2,3,5,8,13];

const inputFib = (input) => {
  return fib(input);
}


const hashMap = {};


const fib = (index) => {
  if (index <= 2) {
    return 1;
  }

  if (hashMap[index] === undefined) {
    hashMap[index] = fib(index - 1) + fib(index - 2);
  }  

  if (hashMap[index]) {
    return hashMap[index];
  }
}

console.log(inputFib(7))
console.log(inputFib(50));