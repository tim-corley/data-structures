export default class Queue {
  constructor() {
    this.queue = [];
  }

  add(item) {
    this.queue.unshift(item);
  }

  remove() {
    this.queue.pop();
  }
}
