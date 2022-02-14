export function numberOfWays(arr, k) {
  const sortedArr = arr.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < sortedArr.length; i++) {
    const first = sortedArr[i];
    if (first >= k) break;
    for (let j = i + 1; j < sortedArr.length; j++) {
      const second = sortedArr[j];
      if (second >= k) break;
      if (first + second === k) {
        count++;
      }
    }
  }

  return count;
}
