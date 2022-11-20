const removeElements = (head, val) => {
  if (head === null){
    return null;
  }
  head.next = removeElements(head.next, val);
  return head.val === val ? head.next : head;
}

const searchForEndOfLinkedList = (linkedListNode, val) => {
  if (linkedListNode.next === null) {
    linkedListNode.next = val;
  } else {
    searchForEndOfLinkedList(linkedListNode.next, val);
  }
}

const arrayToLinkedList = (array) => {

  const firstElement = array.shift();
  let acc = {val: firstElement, next: null};

  while (array.length > 0) {
    const firstElement = array.shift();
    
    searchForEndOfLinkedList(acc, {val: firstElement, next: null});    
  }

  return acc;
}


console.table(removeElements(arrayToLinkedList([1,2,3,4,5]), 3))