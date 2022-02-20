/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = (s) => {
  const reversed = [...s].reverse().join("");

  return s.join("") === reversed;
};
export function validPalindrome(s) {
  const sArr = s.split("");
  if (isValid(sArr)) return true;

  let j = sArr.length;

  while (j > 0) {
    if (isValid(sArr.filter((_, i) => i !== j))) return true;

    j--;
  }

  return false;
}

validPalindrome("abc");
