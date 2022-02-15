/**
 * @param {number} N
 * @param {number} M
 * @param {number[]} C
 * @return {number}
 */
export function getMinCodeEntryTime(N, M, C) {
  let start = 1;
  let seconds = 0;
  let back = 0;
  let front = 0;
  for (let i = 0; i < M; i++) {
    const code = C[i];
    if (code === start) continue;
    if (code < start) {
      back = Math.abs(start - code);
      front = Math.abs(N + 1 - start) + Math.abs(1 - code);
    } else {
      back = Math.abs(start - 1) + Math.abs(N + 1 - code);
      front = Math.abs(code - start);
    }
    start = code;
    seconds += Math.min(front, back);
  }

  return seconds;
}
