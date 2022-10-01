

const middleNode = head => {
    
  let copyHead = head;
  let count = 0;

  while(copyHead) {
    copyHead = copyHead.next;
    count++;
  }

  const findMiddleWayPoint = Math.floor(count / 2);

   for (let i = 0; i < findMiddleWayPoint; i++) {
        head = head.next;
    }

    return head;
};