import Stack from "./stack";

test("item is pushed to the stack", () => {
  const demoStack = new Stack();
  demoStack.push("Alpha");
  expect(demoStack.items).toEqual(["Alpha"]);
});
