export function numberOfWays(arr, k) {
  const m = new Map();
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (m.has(k - arr[i])) {
      count += m.get(k - arr[i]);
    }
    if (m.has(arr[i])) {
      m.set(arr[i], m.get(arr[i]) + 1);
    } else {
      m.set(arr[i], 1);
    }
  }
  return count;
}
