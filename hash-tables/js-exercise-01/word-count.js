let sent =
  "A quick brown fox, named Nap, jumped over the brown box, only after a quick nap nap nap.";

class WordCount {
  constructor() {
    this.storage = new Array(24);
  }

  print() {
    console.table(this.storage);
  }

  hashFunction(str, max) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash += str.charCodeAt(i);
    }
    return hash % max;
  }

  add(key) {
    let idx = this.hashFunction(key, this.storage.length);
    if (this.storage[idx] === undefined) {
      this.storage[idx] = [[key, 1]];
    } else {
      let inserted = false;
      for (let i = 0; i < this.storage[idx].length; i++) {
        if (this.storage[idx][i][0] === key) {
          this.storage[idx][i][1] += 1;
          inserted = true;
        }
      }
      if (!inserted) {
        this.storage[idx].push([key, 1]);
      }
    }
  }
}

const demoWordCount = new WordCount();
wordArr = sent
  .toLowerCase()
  .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
  .split(" ");
wordArr.forEach((w) => demoWordCount.add(w));
demoWordCount.print();
