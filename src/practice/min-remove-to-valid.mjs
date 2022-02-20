/**
 * @param {string} s
 * @return {string}
 */

const openElement = "(";
const closeElement = ")";
export function minRemoveToMakeValid(s) {
  const stack = [];
  const result = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === openElement) {
      stack.push(s[i]);
    }
    if (s[i] === closeElement) {
      if (stack.length === 0) {
        continue;
      } else {
        stack.pop();
      }
    }
    result.push(s[i]);
  }

  if (stack.length > 0) {
    for (let i = 0; i < stack.length; i++) {
      const lastOpen = result.lastIndexOf(openElement);
      result.splice(lastOpen, 1);
    }
  }

  return result.join("");
}
