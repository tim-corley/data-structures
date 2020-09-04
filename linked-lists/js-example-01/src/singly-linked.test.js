import SinglyList from "./singly-linked";

test("adding node to beginning of list works", () => {
  const demoSinglyList = new SinglyList();
  demoSinglyList.addFront("Bravo");
  demoSinglyList.addFront("Alpha");
  expect(demoSinglyList.head.data).toEqual("Alpha");
});

test("next points to correct node", () => {
  const demoSinglyList = new SinglyList();
  demoSinglyList.addFront("Bravo");
  demoSinglyList.addFront("Alpha");
  expect(demoSinglyList.head.next.data).toEqual("Bravo");
});

test("last node next points to null", () => {
  const demoSinglyList = new SinglyList();
  demoSinglyList.addFront("Bravo");
  demoSinglyList.addFront("Alpha");
  expect(demoSinglyList.head.next.next).toEqual(null);
});

test("adding node to end of list works", () => {
  const demoSinglyList = new SinglyList();
  demoSinglyList.addBack("Charlie");
  demoSinglyList.addBack("Delta");
  demoSinglyList.addBack("Echo");
  expect(demoSinglyList.head.next.next.data).toEqual("Echo");
  // expect(demoSinglyList.getAt(2).data).toEqual("Echo");
});

test("getAt helper method works ", () => {
  const demoSinglyList = new SinglyList();
  demoSinglyList.addFront("Bravo");
  demoSinglyList.addFront("Alpha");
  demoSinglyList.addBack("Charlie");
  demoSinglyList.addBack("Delta");
  expect(demoSinglyList.getAt(3).data).toEqual("Delta");
});

test("adding node a specific index works ", () => {
  const demoSinglyList = new SinglyList();
  demoSinglyList.addFront("Bravo");
  demoSinglyList.addFront("Alpha");
  demoSinglyList.addBack("Delta");
  demoSinglyList.addAt("Charlie", 2);
  expect(demoSinglyList.getAt(2).data).toEqual("Charlie");
});

test("deleting list item works", () => {
  const demoSinglyList = new SinglyList();
  demoSinglyList.addFront("Bravo");
  demoSinglyList.addFront("Alpha");
  demoSinglyList.addBack("Charlie");
  demoSinglyList.removeFront();
  expect(demoSinglyList.length).toEqual(2);
});

test("deleting first list item works", () => {
  const demoSinglyList = new SinglyList();
  demoSinglyList.addFront("Bravo");
  demoSinglyList.addFront("Alpha");
  expect(demoSinglyList.removeFront().data).toEqual("Bravo");
});
