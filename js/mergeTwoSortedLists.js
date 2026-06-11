const mergeTwoLists = (list1,list2) => {

  let array = [];
  while (list1.length > 0 && list2.length > 0) {
    if (list1[0] <= list2[0]) {
      const value1 = list1[0]

      // add to array
      array.push(value1);
      list1.shift();
    } else {
      const value2 = list2[0];
      array.push(value2);

      list2.shift();
    }
    console.log(list1, list2, array)
  }

  return array;
}

console.log(mergeTwoLists([1,2,4], [1,3,4]))


const mergeTwoLists1 = (list1, list2) => {
  const dummy = new ListNode(-1000);

  let prev = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      prev.next = list1;
      prev = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      prev = list2;
      list2 = list2.next
    }
  }

  if (!list1) {
    prev.next =list2;
  } else {
    prev.next = list1;
  }

  return dummy.next
}
console.log(mergeTwoLists1([1,2,4], [1,3,4]))