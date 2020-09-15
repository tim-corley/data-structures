import mySet from "./sets";

test("set contains unique items after add", () => {
  const demoSet = new mySet();
  demoSet.add("Bravo");
  demoSet.add("Bravo");
  demoSet.add("Delta");
  expect(demoSet.values()).toEqual(["Bravo", "Delta"]);
});

test("element is removed from set", () => {
  const demoSet = new mySet();
  demoSet.add("Bravo");
  demoSet.add("Charlie");
  demoSet.add("Delta");
  demoSet.remove("Charlie");
  expect(demoSet.values()).toEqual(["Bravo", "Delta"]);
});

test("correct set size is returned", () => {
  const demoSet = new mySet();
  demoSet.add("Bravo");
  demoSet.add("Charlie");
  demoSet.add("Delta");
  demoSet.remove("Charlie");
  expect(demoSet.size()).toEqual(2);
});
