export default class Queue {
  constructor() {
    this.queue = [];
  }

  // add item to front - "enqueue"
  add(item) {
    this.queue.unshift(item);
  }
  // remove item from back - "dequeue"
  remove() {
    if (this.queue.length === 0) return "Queue is Empty!";
    return this.queue.pop();
  }
  getFront() {
    return this.queue[0];
  }
  getSize() {
    return this.queue.length;
  }
  isEmpty() {
    return this.queue.length === 0;
  }
}
