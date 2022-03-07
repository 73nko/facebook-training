/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

*/

function searchRangeSimpleSolve(nums, target) {
  const lower = nums.findIndex((n) => n === target);
  if (lower === -1) return [-1, -1];

  const upper = nums.lastIndexOf(target);

  return [lower, upper];
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  const lower = findBound(nums, target, true);
  if (lower === -1) return [-1, -1];

  const upper = findBound(nums, target, false);
  return [lower, upper];
}

function findBound(nums, target, isFirst) {
  let begin = 0;
  let end = nums.length - 1;

  while (begin <= end) {
    const mid = Math.floor((begin + end) / 2);
    if (nums[mid] === target) {
      if (isFirst) {
        if (mid === begin || nums[mid - 1] < target) {
          return mid;
        }
        end = mid - 1;
      } else {
        if (mid === end || nums[mid + 1] > target) {
          return mid;
        }
        begin = mid + 1;
      }
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      begin = mid + 1;
    }
  }

  return -1;
}

console.log(searchRangeSimpleSolve([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
