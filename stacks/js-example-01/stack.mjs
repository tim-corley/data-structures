export default class Stack {
  // Array is used to implement stack
  constructor() {
    this.items = [];
    this.size = 0;
  }

  // Functions to be implemented
  // push(item)
  push(element) {
    this.items.push(element);
    this.size++;
  }
  // pop()
  pop() {
    if (this.items.length === 0) return "No Stack";
    this.size--;
    return this.items.pop();
  }
  // peek()
  peek() {
    return this.items[this.items.length - 1];
  }
  // isEmpty()
  isEmpty() {
    return this.items.length === 0;
  }
  // printStack()
  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}
