import Queue from "./queue";

test("item added to Queue", () => {
  const demoQueue = new Queue();
  demoQueue.add("Delta");
  expect(demoQueue.queue).toEqual(["Delta"]);
});
