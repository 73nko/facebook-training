/*
  - Find duplicates using Gauss's formula
  - ∑ = n(n+1)/2
*/

export function findDuplicate(N, M) {
  const sum = M.reduce((a, b) => a + b, 0);
  return sum - (N * (N - 1)) / 2;
}
