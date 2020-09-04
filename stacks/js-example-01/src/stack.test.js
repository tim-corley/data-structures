import Stack from "./stack.mjs";

test("item is pushed to the stack", () => {
  const demoStack = new Stack();
  demoStack.push("Alpha");
  expect(demoStack.items).toEqual(["Alpha"]);
});

test("multiple items pushed to the stack", () => {
  const demoStack = new Stack();
  demoStack.push("Bravo");
  demoStack.push("Charlie");
  expect(demoStack.items.length).toEqual(2);
});

test("items removed from the stack", () => {
  const demoStack = new Stack();
  demoStack.push("Alpha");
  demoStack.push("Bravo");
  demoStack.push("Charlie");
  demoStack.pop();
  demoStack.pop();
  expect(demoStack.items.length).toEqual(1);
  expect(demoStack.items).toEqual(["Alpha"]);
});

test("'No Stack' string returned when popping empty stack", () => {
  const demoStack = new Stack();
  demoStack.push("Bravo");
  demoStack.push("Charlie");
  demoStack.pop();
  demoStack.pop();
  expect(demoStack.pop()).toEqual("No Stack");
});

test("top (i.e. last in) item returned on peek", () => {
  const demoStack = new Stack();
  demoStack.push("Alpha");
  demoStack.push("Bravo");
  expect(demoStack.peek()).toEqual("Bravo");
});

test("empty check returns true on empty stack", () => {
  const demoStack = new Stack();
  expect(demoStack.isEmpty()).toBeTruthy();
});

test("empty check returns false on non-empty stack", () => {
  const demoStack = new Stack();
  demoStack.push("Alpha");
  expect(demoStack.isEmpty()).toBeFalsy();
});

test("stack correctly printed", () => {
  const demoStack = new Stack();
  demoStack.push("Alpha");
  demoStack.push("Bravo");
  demoStack.push("Charlie");
  expect(demoStack.printStack()).toEqual("Alpha Bravo Charlie ");
});
