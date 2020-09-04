class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class SinglyList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  // retrieve node at provided position
  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter == index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  // insert new node at end of list
  addBack(data) {
    const node = new Node(data);
    let currentNode = this.head;

    // if list in empty, add new node as first...
    if (!currentNode) {
      this.head = node;
      this.lenght++;
      return node;
    }
    // if node(s) alreadt exist in list...
    // traverse list to find tail & update pointer to new node
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.length++;
    return node;
  }

  // insert new node at start of list
  addFront(data) {
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this.head;
  }

  // inset new node at provided position
  addAt(data, index) {
    // if list is empty, just create new node...
    if (!this.head) {
      this.head = new Node(data);
      this.length++;
      return;
    }
    // if index === 0, insert node at front...
    if (index === 0) {
      this.head = new Node(data, this.head);
      this.length++;
      return;
    }
    // else, use getAt() to find previos node...
    const prevNode = this.getAt(index - 1);
    let node = new Node(data);
    node.next = prevNode.next;
    prevNode.next = node;
    this.length++;
    return this.head;
  }

  removeBack() {
    // if no nodes exist, list is null...
    if (!this.head) {
      this.length--;
      return null;
    }
    // if only one node exists, delete it...
    if (!this.head.next) {
      this.head = null;
      this.length--;
      return;
    }

    let prevNode = this.head;
    let tailNode = this.head.next;
    // traverse to last node...
    while (tailNode.next !== null) {
      prevNode = tailNode;
      tailNode = tailNode.next;
    }
    // remove last node...
    prevNode.next = null;
    this.length--;
    return this.head;
  }

  removeFront() {
    // if no nodes exist...
    if (!this.head) {
      this.length--;
      return;
    }
    this.head = this.head.next;
    this.length--;
    return this.head;
  }

  removeAt() {}
}
