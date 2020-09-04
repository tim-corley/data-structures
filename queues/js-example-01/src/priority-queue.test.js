import PriorityQueue from "./priority-queue";

test("items appear in correct order", () => {
  const demoPQ = new PriorityQueue();
  demoPQ.add(["Bravo", 2]);
  demoPQ.add(["Delta", 4]);
  demoPQ.add(["Alpha", 1]);
  demoPQ.add(["Charlie", 3]);
  expect(demoPQ.collection).toEqual([
    ["Alpha", 1],
    ["Bravo", 2],
    ["Charlie", 3],
    ["Delta", 4],
  ]);
});

test("remove returns correct item", () => {
  const demoPQ = new PriorityQueue();
  demoPQ.add(["Two", 2]);
  demoPQ.add(["Zero", 0]);
  expect(demoPQ.remove()).toEqual("Zero");
});

test("collection correct after removal", () => {
  const demoPQ = new PriorityQueue();
  demoPQ.add(["Bravo", 2]);
  demoPQ.add(["Brady", 2]);
  demoPQ.add(["Delta", 4]);
  demoPQ.add(["Alpha", 1]);
  demoPQ.add(["Charlie", 3]);
  demoPQ.remove();
  demoPQ.remove();
  demoPQ.remove();
  expect(demoPQ.collection).toEqual([
    ["Charlie", 3],
    ["Delta", 4],
  ]);
});

test("empty check returns true on empty Priority Queue", () => {
  const demoPQ = new PriorityQueue();
  demoPQ.add(["Delta", 3]);
  demoPQ.remove();
  expect(demoPQ.isEmpty()).toBeTruthy();
});

test("empty check returns false on non-empty Priority Queue", () => {
  const demoPQ = new PriorityQueue();
  demoPQ.add(["Delta", 3]);
  expect(demoPQ.isEmpty()).toBeFalsy();
});
