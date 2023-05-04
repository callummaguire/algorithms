
const generateLinkedList = (val, node) => ({
  val,
  next: node === undefined ? null : node 
})

const linkedList = generateLinkedList(5, generateLinkedList(2)); 

const searchLinkedList = () => {
    let dummy = null;

    dummy = linkedList;

    while (dummy) {

      console.log(dummy.val);

      dummy = dummy.next;
    }
}

console.log(searchLinkedList(),  5, 2);