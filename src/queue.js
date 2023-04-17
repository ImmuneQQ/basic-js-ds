const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.data = null;
  }

  getUnderlyingList() {
    return this.data;
  }

  enqueue(value) {
    if (this.data === null) {
      this.data = new ListNode(value);
      return;
    }

    let current = this.data;

    while (true) {
      if (current.next === null) {
        current.next = new ListNode(value);
        break;
      }
      current = current.next;
    }
  }

  dequeue() {
    console.log(this.getUnderlyingList());
    let value = this.data.value;
    this.data = this.data.next;
    console.log(this.getUnderlyingList());
    return value;
  }
}

module.exports = {
  Queue
};
