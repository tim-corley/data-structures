const revString = (str) => {
  let stack = [];
  let reverse = "";

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  while (stack.length > 0) {
    reverse += stack.pop();
  }
  return reverse;
};

console.log(revString("JavaScript Stack!")); // !kcatS tpircSavaJ
