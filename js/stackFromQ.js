

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


class MyQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  } 

  enqueue (val) {
    const node = new Node(val);
    if (this.size === 0) {
      this.head = node;
      this.tail = node 
    } else {
      this.tail.next = node;
      this.tail = node
    }

    this.size++;
  }

  dequeue () {
    if (this.size === 0) {
      return null;
    }
    
    let node = this.head;
    this.head = this.head.next;
    node.next = null;

    this.size--;

    return node.val
  }


  peek() {
    return this.head.val;
  }
  empty() {
    return this.size === 0;
  }
}


var MyStack = function() {
    this.queue = new MyQueue();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    let rotate = this.queue.size;
    this.queue.enqueue(x);

    while(rotate) {
      this.queue.enqueue(this.queue.dequeue());

      rotate--;
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this.queue.dequeue();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.queue.peek();
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.queue.empty();
};