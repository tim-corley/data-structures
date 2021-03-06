export default class Hash {
  constructor() {
    this.storage = [];
    this.storageLimit = 12;
    // could also use:
    // storage = new Array(12)
    // where this.storage.length can me passed for max arg
  }

  hashFunction(str, max) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash += str.charCodeAt(i);
    }
    return hash % max;
  }

  print() {
    console.table(this.storage);
  }

  add(key, val) {
    let index = this.hashFunction(key, this.storageLimit);
    // check if bucket is empty (undefined)
    // if so, add key/value there
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, val]];
    } else {
      // if bucket not empty & key already exists, add new value
      // will be used when updating a value on a key/val pair
      let inserted = false;
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = val;
          inserted = true;
        }
      }
      // avoid collisions by chaining...
      // if bucket not empty & no key already exists/matches push new key/val pair to array[index]
      if (!inserted) {
        this.storage[index].push([key, val]);
      }
    }
  }

  // TODO: remove() only works if single item in bucket
  remove(key) {
    let index = this.hashFunction(key, this.storageLimit);
    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      delete this.storage[index];
    } else {
      for (let i = 0; i < this.storage[index]; i++) {
        if (this.storage[index][i][0] === key) {
          delete this.storage[index][i];
        }
      }
    }
  }

  lookup(key) {
    let index = this.hashFunction(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      console.log("undefined");
      return undefined;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          console.log(this.storage[index][i][1]);
          return this.storage[index][i][1];
        }
      }
    }
  }
}
