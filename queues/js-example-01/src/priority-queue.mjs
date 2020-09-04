export default class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  printCollection() {
    console.log(this.collection);
  }

  isEmpty() {
    return this.collection.length === 0;
  }

  add(item) {
    if (this.collection.isEmpty) {
      this.collection.push(item);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (item[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, item);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(item);
      }
    }
  }

  remove() {
    let value = this.collection.shift();
    return value[0];
  }
}
