// NOTE: to run - use: $ node --experimental-modules examples.mjs
// SEE: https://blog.logrocket.com/how-to-use-ecmascript-modules-with-node-js/

import Stack from "../stacks/js-example-01/src/stack.mjs";
import Queue from "../queues/js-example-01/src/queue.mjs";
import PriorityQueue from "../queues/js-example-01/src/priority-queue.mjs";
import SinglyList from "../linked-lists/js-example-01/src/singly-linked.mjs";
import DoublyList from "../linked-lists/js-example-01/src/doubly-linked.mjs";
import Hash from "../hash-tables/js-example-01/src/hash-table.mjs";

console.log("\n/////// STACK ////////\n");

const demoStack = new Stack();
demoStack.push("One");
console.log(demoStack.items);

console.log("\n/////// QUEUE ////////\n");

const demoQueue = new Queue();
demoQueue.add("Delta");
demoQueue.add("Echo");
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
