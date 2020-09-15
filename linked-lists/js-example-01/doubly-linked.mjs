class Node {
  constructor(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

export default class DoublyList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // -- HELPER FUNCTIONS --

  // -- LIST OPERATIONS --
  addHead(data) {
    const node = new Node(data, this.head, null);
    // if node already exists...
    if (this.head) this.head.prev = node;
    // if list is empty...
    else this.tail = node;
    this.head = node;
    this.length++;
    return node;
  }

  addTail(data) {
    const node = new Node(data, null, this.tail);
    if (this.tail) this.tail.next = node;
    else this.head = node;
    this.tail = node;
    this.length++;
    return node;
  }

  removeHead() {
    if (!this.head) return null;
    let data = this.head.data;
    this.head = this.head.next;

    if (this.head) this.head.prev = null;
    else this.tail = null;

    this.length--;
    return data;
  }

  removeTail() {
    if (!this.tail) return null;
    let data = this.tail.data;
    this.tail = this.tail.prev;

    if (this.tail) this.tail.next = null;
    else this.head = null;

    this.length--;
    return data;
  }

  searchNode(data) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) return `FOUND NODE: ${currentNode.data}`;
      currentNode = currentNode.next;
    }
    return null;
  }
}
