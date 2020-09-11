// NOTE: to run - use: $ node --experimental-modules examples.mjs
// SEE: https://blog.logrocket.com/how-to-use-ecmascript-modules-with-node-js/

import Stack from "../stacks/js-example-01/src/stack.mjs";
import mySet from "../sets/js-example-01/src/sets.mjs";
import Queue from "../queues/js-example-01/src/queue.mjs";
import PriorityQueue from "../queues/js-example-01/src/priority-queue.mjs";
import SinglyList from "../linked-lists/js-example-01/src/singly-linked.mjs";
import DoublyList from "../linked-lists/js-example-01/src/doubly-linked.mjs";
import Hash from "../hash-tables/js-example-01/src/hash-table.mjs";

console.log("\n/////// STACK ////////\n");

const demoStack = new Stack();
demoStack.push("One");
demoStack.push("Three");
demoStack.push("Five");
demoStack.pop();
console.log(demoStack.items);

console.log("\n/////// SETS ////////\n");

let setA = new mySet();
setA.add("a");
console.log(setA.add("b")); // true
setA.add("c");
setA.add("a");
console.log(setA.values()); // [ 'a', 'b', 'c' ]
setA.remove("c");
console.log(setA.values()); // [ 'a', 'b' ]
console.log(setA.size()); // 2

let setB = new mySet();
setB.add("zero");
setB.add("one");
setB.add("two");
setB.add("three");

let setC = new mySet();
setC.add("two");
setC.add("three");
setC.add("four");
setC.add("five");

let comboSet = setC.union(setB);
console.log(comboSet.values()); // [ 'two', 'three', 'four', 'five', 'zero', 'one' ]

let setAlpha = new mySet();
setAlpha.add(2);
setAlpha.add(3);
setAlpha.add(3);

let setBravo = new mySet();
setBravo.add(1);
setBravo.add(2);
setBravo.add(3);
setBravo.add(4);
setBravo.add(5);

console.log(setAlpha.subset(setBravo)); // true
console.log(setA.subset(setAlpha)); // false

console.log("\n/////// QUEUE ////////\n");

const demoQueue = new Queue();
demoQueue.add("Echo");
demoQueue.add("Foxtrot");
console.log(demoQueue.queue);

console.log("\n///// PRIORITY QUEUE //////\n");

const demoPQ = new PriorityQueue();
demoPQ.add(["Bravo", 2]);
demoPQ.add(["Delta", 4]);
demoPQ.add(["Alpha", 1]);
demoPQ.add(["Charlie", 3]);
demoPQ.printCollection();

console.log("\n///// SINGLY LINKED LIST //////\n");

const singlyDemo = new SinglyList();
singlyDemo.addFront("One");
singlyDemo.addBack("Two");
console.log(singlyDemo);

console.log("\n///// DOUBLY LINKED LIST //////\n");

const doublyDemo = new DoublyList();
doublyDemo.addHead("First");
doublyDemo.addTail("Second");
console.table(doublyDemo);

console.log("\n///// HASH TABLE //////\n");

const demoHash = new Hash();
demoHash.add("Medfield", 12052);
demoHash.add("Newton", 12458);
demoHash.add("Newton", 99999);
demoHash.print();
demoHash.remove("Newton");
demoHash.print();
demoHash.add("Norwood", 12062);
demoHash.add("Westwood", 12090);
demoHash.lookup("Norwood");
demoHash.print();
console.log("\n------\n");
const index = demoHash.hashFunction("Westwood", demoHash.storageLimit);
console.log(index);
const test = demoHash.storage[index];
console.log(test);
let testArr = [];
demoHash.storage.forEach((item) => (item ? testArr.push(item) : null));
console.log(testArr);
