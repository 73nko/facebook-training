const openSimbols = ["(", "[", "{"];
const closeSimbols = [")", "]", "}"];

function isBalanced(input) {
  const stack = [];
  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (openSimbols.includes(char)) {
      stack.push(char);
    } else if (closeSimbols.includes(char)) {
      if (stack.length <= 0) {
        return false;
      }

      if (openSimbols.indexOf(stack.pop()) !== closeSimbols.indexOf(char)) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

const input1 = "([])[]({})";
const input2 = "([)]";
const input3 = "((()";

console.log("Expect true: ", isBalanced(input1));
console.log("Expect false: ", isBalanced(input3));
console.log("Expect false: ", isBalanced(input2));
