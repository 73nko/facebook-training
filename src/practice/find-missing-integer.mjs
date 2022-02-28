/*
Given an array of integers, find the first missing positive integer in linear time and constant space.
In other words, find the lowest positive integer that does not exist in the array.
The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.

*/

export function findMissingInteger(arr) {
  const response = [];

  for (const num of arr) {
    if (num > 0) {
      response[num - 1] = 1;
    }
  }
  return response.findIndex((i) => i === undefined) + 1 || response.length + 1;
}
