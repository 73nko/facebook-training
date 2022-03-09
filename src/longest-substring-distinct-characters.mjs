/*
Given an integer k and a string s, find the length of the longest
substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".
*/

/*
 Solution:

 The problem can be solved in O(n). Idea is to maintain a window and add elements
 to the window till it contains less or equal k, update our result if required while doing so.
 If unique elements exceeds the required in window, start removing the elements from left side.
 Below are the implementations of above. The implementations assume that the
 input string alphabet contains only 26 characters (from ‘a’ to ‘z’).
 The code can be easily extended to 256 characters.
*/

const MAX_CHARS = 26;

function Kuniques(s, k) {
  let uniques = 0;
  const n = s.length;
  let count = Array(MAX_CHARS).fill(0);

  for (let i = 0; i < n; i++) {
    if (count[s[i].charCodeAt(0) - "a".charCodeAt(0)] === 0) {
      uniques++;
    }

    count[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  if (uniques < k) return [];

  let currStart = 0;
  let currEnd = 0;

  let maxWindowSize = 1;
  let maxWindowStart = 0;

  count = Array(MAX_CHARS).fill(0);
  count[s[0].charCodeAt(0) - "a".charCodeAt(0)]++;

  for (let i = 1; i < n; i++) {
    count[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    currEnd++;

    while (!isValid(count, k)) {
      count[s[currStart].charCodeAt(0) - "a".charCodeAt(0)]--;
      currStart++;
    }

    if (currEnd - currStart + 1 > maxWindowSize) {
      maxWindowSize = currEnd - currStart + 1;
      maxWindowStart = currStart;
    }
  }

  return s.substring(maxWindowStart, maxWindowStart + maxWindowSize + 1);
}

function isValid(count, k) {
  let val = 0;

  for (let i = 0; i < MAX_CHARS; i++) {
    if (count[i] > 0) {
      val++;
    }
  }

  return k >= val;
}
const s = "aabacbebebe";

console.log(Kuniques(s, 3));
