import Queue from "./queue";

test("item added to Queue", () => {
  const demoQueue = new Queue();
  demoQueue.add("Delta");
  expect(demoQueue.queue).toEqual(["Delta"]);
});

test("multiple items added to Queue", () => {
  const demoQueue = new Queue();
  demoQueue.add("Delta");
  demoQueue.add("Echo");
  demoQueue.add("Foxtrot");
  expect(demoQueue.queue).toEqual(["Foxtrot", "Echo", "Delta"]);
});

test("item removed from Queue", () => {
  const demoQueue = new Queue();
  demoQueue.add("Alpha");
  demoQueue.add("Bravo");
  demoQueue.remove();
  expect(demoQueue.queue).toEqual(["Bravo"]);
});

test("removing from empty Queue returns message", () => {
  const demoQueue = new Queue();
  demoQueue.add("Delta");
  demoQueue.remove();
  expect(demoQueue.remove()).toEqual("Queue is Empty!");
});

test("getFront returns first item in Queue", () => {
  const demoQueue = new Queue();
  demoQueue.add("Delta");
  demoQueue.add("Echo");
  expect(demoQueue.getFront()).toEqual("Echo");
});

test("getSize return correct Queue length", () => {
  const demoQueue = new Queue();
  demoQueue.add("Delta");
  demoQueue.add("Echo");
  demoQueue.add("Foxtrot");
  expect(demoQueue.getSize()).toEqual(3);
});

test("empty check returns true on empty Queue", () => {
  const demoQueue = new Queue();
  demoQueue.add("Delta");
  demoQueue.remove();
  expect(demoQueue.isEmpty()).toBeTruthy();
});

test("empty check returns false on non-empty Queue", () => {
  const demoQueue = new Queue();
  demoQueue.add("Delta");
  expect(demoQueue.isEmpty()).toBeFalsy();
});
