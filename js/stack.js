// LIFO
// think of it like dinner plates 
const Stack = (array) => ({
  pop: () => {
    return array.pop();
  },

  push: (item) => {
    return array.push(item)
  },

  peek: () => {
    return array.at(-1)
  },

  isEmpty: () => {
    return array.length === 0;
  }
})

const array = [1,2,3,4,5];
const instanceOfStack = Stack(array);
console.log(instanceOfStack.pop() === 5);
console.log(instanceOfStack.push(10));
console.log(instanceOfStack.peek() === 10);
console.log(instanceOfStack.isEmpty() === false);

// LIFO
// think of it like dinner plates 
const Stack1 = (array) => ({
  pop: () => {
    const element = array.slice(-1);
    array = array.slice(-1);
    return element[0]
  },

  push: (item) => {
    array = [...array, item]
  },

  peek: () => {
    return array[array.length -1];
  },

  isEmpty: () => {
    return array.length === 0;
  }
})

const array1 = [1,2,3,4,5];
const instanceOfStack1 = Stack1(array1);
console.log(instanceOfStack1.pop() === 5);
console.log(instanceOfStack1.push(10));
console.log(instanceOfStack1.peek() === 10);
console.log(instanceOfStack1.isEmpty() === false);
