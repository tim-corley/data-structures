// Stack class
export default class Stack {
  // Array is used to implement stack
  constructor() {
    this.items = [];
  }

  // Functions to be implemented
  // push(item)
  push(element) {
    this.items.push(element);
  }
  // pop()
  pop() {
    if (this.items.length === 0) return "No Stack";
    return this.items.pop();
  }
  // peek()
  // isEmpty()
  // printStack()
}
