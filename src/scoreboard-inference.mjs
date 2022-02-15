/**
 * @param {number} N
 * @param {number[]} S
 * @return {number}
 */
export function getMinProblemCount(N, S) {
  // Write your code here
  // const max = Math.max(...S);
  const max = S.reduce((a, b) => Math.max(a, b));
  const baseQuestions = max / 2;

  if (max % 2 === 1) return Math.floor(baseQuestions) + 1;

  const hasOdd = S.find((e) => e % 2 !== 0);
  return hasOdd ? baseQuestions + 1 : baseQuestions;
}
