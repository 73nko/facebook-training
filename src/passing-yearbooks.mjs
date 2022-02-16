export function findSignatureCounts(arr) {
  const ans = Array(arr.length).fill(1);

  for (let i = 0; i < arr.length; i++) {
    let k = i;
    while (arr[k] !== i + 1) {
      ans[i]++;
      k = arr[k] - 1;
    }
  }

  return ans;
}
