import Hash from "./hash-table";

test("items added to hash table", () => {
  const demoHash = new Hash();
  demoHash.add("Brookline", 12445);
  demoHash.add("Newton", 12460);
  const index = demoHash.hashFunction("Brookline", demoHash.storageLimit);
  expect(demoHash.storage[index][0].includes("Brookline")).toBeTruthy();
});

test("non-empty bucket count is correct", () => {
  const demoHash = new Hash();
  demoHash.add("Brookline", 12445);
  demoHash.add("Newton", 12460);
  let testArr = [];
  demoHash.storage.forEach((item) => (item ? testArr.push(item) : null));
  expect(testArr.length).toEqual(2);
});

test("item removed from hash table", () => {
  const demoHash = new Hash();
  demoHash.add("Brookline", 12445);
  demoHash.add("Wellesley", 12482);
  demoHash.add("Newton", 12460);
  demoHash.remove("Wellesley");
  const index = demoHash.hashFunction("Wellesley", demoHash.storageLimit);
  // bucket should now be undefined (i.e. Falsy)
  expect(demoHash.storage[index]).toBeFalsy();
});

test("correct value returned for search (by key)", () => {
  const demoHash = new Hash();
  demoHash.add("Brookline", 12445);
  demoHash.add("Wellesley", 12482);
  demoHash.add("Newton", 12460);
  const searchResult = demoHash.lookup("Wellesley");
  // bucket should now be undefined (i.e. Falsy)
  expect(searchResult).toEqual(12482);
});
