/**
 * @param {string} s
 * @return {boolean}
 */

export function validPalindrome(s) {
  return isPalindrome(s, 0, s.length - 1, true);
}

const isPalindrome = (s, start, end, skip) => {
  while (start <= end) {
    if (s[start] !== s[end]) {
      if (skip)
        return (
          isPalindrome(s, start + 1, end, false) ||
          isPalindrome(s, start, end - 1, false)
        );
      else return false;
    }
    start++;
    end--;
  }
  return true;
};
