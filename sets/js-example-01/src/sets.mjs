export default function mySet() {
  let collection = [];

  // return true if element is in collection
  this.has = (element) => {
    return collection.indexOf(element) !== -1;
  };

  this.values = () => {
    return collection;
  };

  // if element is not already in collection, add it
  this.add = (element) => {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  this.remove = (element) => {
    if (this.has(element)) {
      let index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = () => {
    return collection.length;
  };

  // return a new set from two sets
  this.union = (otherSet) => {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach((elem) => {
      unionSet.add(elem);
    });
    secondSet.forEach((elem) => {
      unionSet.add(elem);
    });
    return unionSet;
  };

  // return a set of the common values between two sets
  this.intersection = (otherSet) => {
    let interSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach((elem) => {
      if (otherSet.has(elem)) {
        interSet.add(elem);
      }
    });
    return interSet;
  };

  // return a set of the different values between two sets
  this.difference = (otherSet) => {
    let diffSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach((elem) => {
      if (!otherSet.has(elem)) {
        diffSet.add(elem);
      }
    });
    return diffSet;
  };

  // test if set is a subset of another set
  this.subset = (otherSet) => {
    let firstSet = this.values();
    return firstSet.every((elem) => {
      return otherSet.has(elem);
    });
  };
}
