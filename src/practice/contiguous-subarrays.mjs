export function countSubarrays(arr) {
  const res = [];
  for (let i = 1; i <= arr.length; i++) {
    let j = 0;
    while (j < i) {
      const max = Math.max(...arr.slice(j, i));
      if (arr[j] === max) {
        res[j] = (res[j] || 0) + 1;
      } else if (arr[i - 1] === max) {
        res[i - 1] = (res[i - 1] || 0) + 1;
      }
      j++;
    }
  }
  return res;
}
