import DoublyList from "./doubly-linked";

test("adding node works ", () => {
  const demoDoubly = new DoublyList();
  demoDoubly.addHead("Delta");
  demoDoubly.addTail("Bravo");
  expect(demoDoubly.length).toEqual(2);
});

test("adding node to head works ", () => {
  const demoDoubly = new DoublyList();
  demoDoubly.addHead("Delta");
  demoDoubly.addHead("Bravo");
  expect(demoDoubly.head.data).toEqual("Bravo");
});

test("adding node to tail works ", () => {
  const demoDoubly = new DoublyList();
  demoDoubly.addTail("Delta");
  demoDoubly.addTail("Bravo");
  demoDoubly.addTail("Echo");
  demoDoubly.addHead("Alpha");
  expect(demoDoubly.tail.data).toEqual("Echo");
});

test("removing node works ", () => {
  const demoDoubly = new DoublyList();
  demoDoubly.addHead("Delta");
  demoDoubly.addTail("Bravo");
  demoDoubly.removeHead();
  demoDoubly.removeTail();
  expect(demoDoubly.length).toEqual(0);
});

test("searching node works ", () => {
  const demoDoubly = new DoublyList();
  demoDoubly.addHead("Bravo");
  demoDoubly.addTail("Delta");
  demoDoubly.addHead("Alpha");
  expect(demoDoubly.searchNode("Delta")).toEqual("FOUND NODE: Delta");
});
