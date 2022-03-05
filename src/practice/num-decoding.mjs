/**
 * @param {string} s
 * @return {number}
 */
function numDecodings(s) {
  if (s[0] === "0") return 0;

  let count = 1;
  let countTwo = 1;

  for (let i = 1; i < s.length; i++) {
    let current = 0;

    if (s[i] !== "0") current = count;

    const twoDigit = parseInt(s.slice(i - 1, i + 1));

    if (twoDigit <= 26 && twoDigit >= 10) current += countTwo;

    countTwo = count;
    count = current;
  }

  return count;
}

console.log(numDecodings("12"));
