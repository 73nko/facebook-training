/**
 * @param {number[]} nums
 * @return {number}
 */
function deleteAndEarn(nums) {
  const points = new Map();
  let maxNumber = 0;

  for (const num of nums) {
    points.set(num, (points.has(num) ? points.get(num) : 0) + num);
    maxNumber = Math.max(maxNumber, num);
  }

  let twoBack = 0;
  let oneBack = points.get(1) || 0;

  for (let i = 2; i <= maxNumber; i++) {
    const temp = oneBack;
    oneBack = Math.max(oneBack, twoBack + (points.get(i) || 0));

    twoBack = temp;
  }

  return oneBack;
}

console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]));
