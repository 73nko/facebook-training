/*
This problem was asked by Facebook.

You are given an array of non-negative integers that represents a two-dimensional elevation map where each
element is unit-width wall and the integer is the height. Suppose it will rain and all spots between two walls get filled up.

Compute how many units of water remain trapped on the map in O(N) time and O(1) space.

For example, given the input [2, 1, 2], we can hold 1 unit of water in the middle.

Given the input [3, 0, 1, 3, 0, 5], we can hold 3 units in the first index, 2 in the second,
and 3 in the fourth index (we cannot hold 5 since it would run off to the left), so we can trap 8 units of water

*/

function getDrops(arr = []) {
  let output = 0;
  const peak = Math.max(...arr.slice(0, arr.length - 1));
  const peakIndex = arr.findIndex((e) => e === peak);

  for (let i = 1; i < arr.length - 1; i++) {
    if (i < peakIndex) {
      output += Math.min(peak, arr[0]) - arr[i];
    } else if (i > peakIndex) {
      output += Math.min(peak, arr[arr.length - 1]) - arr[i];
    }
  }
  return output;
}

console.log(getDrops([3, 0, 1, 5, 0, 8]) === 10, "Should return 10");
console.log(getDrops([3, 0, 1, 3, 0, 5]) === 8, "Should return 8");
console.log(getDrops([2, 1, 2]) === 1, "Should return 1");
